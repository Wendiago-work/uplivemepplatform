import { useQuery } from '@tanstack/react-query';
import { JobsResponse, Job } from '@/types/job';

// const JOBS_API_URL = '/api/jobs';
const JOBS_API_URL = 'https://api.manatal.com/open/v3/career-page/mep-platform/jobs/';

async function fetchJobs(): Promise<JobsResponse> {
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
    queryKey: ['jobs'],
    queryFn: fetchJobs,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
}

async function fetchJob(id: string): Promise<Job> {
  const response = await fetch(`${JOBS_API_URL}${id}/`);

  if (!response.ok) {
    throw new Error(`Failed to fetch job: ${response.statusText}`);
  }

  return response.json();
}

export function useJob(id: string | null) {
  return useQuery({
    queryKey: ['job', id],
    queryFn: () => fetchJob(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
}
