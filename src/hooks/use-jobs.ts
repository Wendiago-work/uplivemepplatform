import { useQuery, useQueryClient } from "@tanstack/react-query";
import { JobsResponse, Job } from "@/types/job";
import { queryKeys } from "@/hooks/queryKeys";

// const JOBS_API_URL = '/api/jobs';
const JOBS_API_URL = 'https://api.manatal.com/open/v3/career-page/mep-platform/jobs/';

export async function fetchJobs(): Promise<JobsResponse> {
  try {
    const aggregatedResults: JobsResponse['results'] = [];
    let nextUrl: string | null = JOBS_API_URL;
    let totalCount = 0;
    const visited = new Set<string>();

    while (nextUrl) {
      if (visited.has(nextUrl)) {
        // Prevent infinite loops if the API returns a duplicate link.
        break;
      }

      visited.add(nextUrl);

      const response = await fetch(nextUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch jobs: ${response.statusText}`);
      }

      const page: JobsResponse = await response.json();

      if (!totalCount) {
        totalCount = page.count;
      }

      aggregatedResults.push(...page.results);
      nextUrl = page.next;
    }

    return {
      count: totalCount || aggregatedResults.length,
      next: null,
      previous: null,
      results: aggregatedResults,
    };
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw new Error('Failed to fetch jobs. Please try again later.');
  }
}

export function useJobs() {
  return useQuery({
    queryKey: queryKeys.jobs(),
    queryFn: fetchJobs,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30,   // 30 minutes cache retention
    refetchOnWindowFocus: true,
  });
}

export async function fetchJob(id: string): Promise<Job> {
  const response = await fetch(`${JOBS_API_URL}${id}/`);

  if (!response.ok) {
    throw new Error(`Failed to fetch job: ${response.statusText}`);
  }

  return response.json();
}

export function useJob(id: string | null) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: queryKeys.job(id),
    queryFn: () => fetchJob(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: true,
    initialData: () => {
      if (!id) return undefined;
      const jobsList = queryClient.getQueryData<JobsResponse>(queryKeys.jobs());
      return jobsList?.results.find((job) => String(job.id) === String(id));
    },
    initialDataUpdatedAt: () => queryClient.getQueryState(queryKeys.jobs())?.dataUpdatedAt,
  });
}
