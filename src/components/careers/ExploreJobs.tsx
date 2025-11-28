import { motion } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { careersTeams } from "@/constants/careersTeams";
import { strings } from "@/lib/strings";
import { Search, ChevronRight, ChevronsUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Title } from "@/components/ui/title";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useJobs, fetchJob } from "@/hooks/use-jobs";
import { queryKeys } from "@/hooks/queryKeys";
import { useQueryClient } from "@tanstack/react-query";
import { Job } from "@/types/job";

export const ExploreJobs = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading, isError } = useJobs();

  const [searchQuery, setSearchQuery] = useState("");
  const [teamFilter, setTeamFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string[]>([]);
  const [workTypeFilter, setWorkTypeFilter] = useState<string>("all");

  const JOBS_PER_PAGE = 6;

  const locationOptions = ["Ho Chi Minh", "Hanoi"];
  const workTypeOptions = [
    { value: "full_time", label: "Full Time" },
    { value: "freelance", label: "Freelance" },
  ];

  const handleLocationChange = (value: string, checked: boolean | "indeterminate") => {
    setLocationFilter((prev) => {
      if (checked === true) {
        if (prev.includes(value)) return prev;
        return [...prev, value];
      }
      return prev.filter((item) => item !== value);
    });
  };

  const clearLocations = () => setLocationFilter([]);

  // Filter jobs
  const filteredJobs = useMemo(() => {
    if (!data?.results) return [];

    return data.results.filter((job) => {
      const matchesSearch = job.position_name.toLowerCase().includes(searchQuery.toLowerCase());

      // TEMPORARY: Ignore filter function as requested by user due to API data mismatch.
      // We just display the static filters but do not apply the filtering logic.
      /*
      // Team Matching Logic:
      // API returns "team" (e.g. "Product", "Engineering").
      // Static teams have "id" (e.g. "product", "tech") and "title" (e.g. "LiveOps", "Tech").
      // We'll try to match loosely.
      let matchesTeam = true;
      if (teamFilter !== "all") {
        const selectedTeam = careersTeams.find(t => t.id === teamFilter);
        if (selectedTeam && job.team) {
          // Check if job team contains the team title or id (case insensitive)
          // This is a heuristic since we don't have a strict mapping.
          const jobTeam = job.team.toLowerCase();
          const teamTitle = selectedTeam.title.toLowerCase();
          const teamId = selectedTeam.id.toLowerCase();

          // Special case for "Tech" vs "Engineering" if needed, or just rely on string match
          matchesTeam = jobTeam.includes(teamTitle) || jobTeam.includes(teamId);
        } else {
          matchesTeam = false;
        }
      }

      const matchesLocation = locationFilter.length === 0 || (job.location_display && locationFilter.includes(job.location_display));
      const matchesWorkType = workTypeFilter === "all" || job.contract_details === workTypeFilter;
      */

      // Only apply search filter for now
      return matchesSearch;
    });
  }, [data?.results, searchQuery]);

  // Pagination Logic
  const totalJobs = filteredJobs.length;
  const totalPages = Math.max(1, Math.ceil(totalJobs / JOBS_PER_PAGE));

  const currentPage = (() => {
    const rawPage = Number(searchParams.get("page") ?? "1");
    if (!Number.isFinite(rawPage) || rawPage < 1) return 1;
    return Math.min(Math.floor(rawPage), totalPages);
  })();

  // Reset to page 1 when filters change
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (params.has("page") && Number(params.get("page")) !== 1) {
      params.delete("page");
      setSearchParams(params, { replace: true });
    }
  }, [searchQuery, searchParams, setSearchParams]);


  const paginatedJobs = useMemo(() => {
    const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
    return filteredJobs.slice(startIndex, startIndex + JOBS_PER_PAGE);
  }, [filteredJobs, currentPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    const nextParams = new URLSearchParams(searchParams);
    if (page === 1) {
      nextParams.delete("page");
    } else {
      nextParams.set("page", String(page));
    }
    setSearchParams(nextParams);

    // Scroll to the top of the job list to persist context
    const jobsSection = document.getElementById("explore-jobs");
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pageNumbers = useMemo(() => {
    if (totalPages <= 1) return [];
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }, [totalPages]);

  const selectedLocationsLabel =
    locationFilter.length === 0 ? "All Locations" : locationFilter.join(", ");

  return (
    <section id="explore-jobs">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Title as="h2" className="text-4xl md:text-5xl mb-6">
            {strings.careersPage.jobs.title}
          </Title>
          <p className="text-[20px] max-w-3xl">
            {strings.careersPage.jobs.description}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex flex-col md:flex-row gap-4"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus-visible:ring-gray-300 focus-visible:border-gray-300"
            />
          </div>

          <Select value={teamFilter} onValueChange={setTeamFilter}>
            <SelectTrigger className="w-full md:w-56 h-12 bg-gray-50 border-gray-200 text-gray-900 focus:ring-gray-300 focus:border-gray-300">
              <SelectValue placeholder="Team" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 text-gray-900 shadow-xl">
              <SelectItem value="all" className="text-gray-900 focus:bg-gray-100 focus:text-gray-900">
                All Teams
              </SelectItem>
              {careersTeams.map((team) => (
                <SelectItem
                  key={team.id}
                  value={team.id}
                  className="text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                >
                  {team.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className="w-full px-3 md:w-56 h-12 justify-between bg-gray-50 border-gray-200 text-gray-900 font-sans text-sm normal-case focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900 data-[state=open]:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
              >
                <span className="truncate">{selectedLocationsLabel}</span>
                <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-white border border-gray-200 text-gray-900 shadow-xl w-64">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-700">Locations</span>
                <button
                  type="button"
                  onClick={clearLocations}
                  className="text-xs text-primary font-bold disabled:text-gray-400 disabled:no-underline"
                  disabled={locationFilter.length === 0}
                >
                  Clear
                </button>
              </div>
              <div className="space-y-3">
                {locationOptions.map((location) => (
                  <label key={location} className="flex items-center gap-3 text-sm text-gray-700">
                    <Checkbox
                      className="border-black"
                      checked={locationFilter.includes(location)}
                      onCheckedChange={(checked) => handleLocationChange(location, checked)}
                    />
                    <span>{location}</span>
                  </label>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          <Select value={workTypeFilter} onValueChange={setWorkTypeFilter}>
            <SelectTrigger className="w-full md:w-48 h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-gray-300 focus:border-gray-300">
              <SelectValue placeholder="Work Type" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 text-gray-900 shadow-xl">
              <SelectItem value="all" className="text-gray-900 focus:bg-gray-100 focus:text-gray-900">
                All Types
              </SelectItem>
              {workTypeOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        {/* Job Count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[20px] mb-8"
        >
          We have <span className="text-primary font-semibold">{filteredJobs.length}</span> open positions.
        </motion.p>

        {/* Jobs Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {isLoading ? (
            <div className="text-center py-12 text-gray-500">Loading jobs...</div>
          ) : isError ? (
            <div className="text-center py-12 text-red-500">Failed to load jobs. Please try again later.</div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-12 text-gray-500">No jobs found matching your criteria.</div>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-gray-200 hover:bg-transparent">
                    <TableHead className="text-base font-semibold text-gray-500">Title</TableHead>
                    <TableHead className="text-base font-semibold text-gray-500">Team</TableHead>
                    <TableHead className="text-base font-semibold text-gray-500">Location</TableHead>
                    <TableHead className="text-base font-semibold text-gray-500">Work Type</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedJobs.map((job) => (
                    <TableRow
                      key={job.id}
                      onClick={async () => {
                        await queryClient.prefetchQuery({
                          queryKey: queryKeys.job(String(job.id)),
                          queryFn: () => fetchJob(String(job.id)),
                          staleTime: 1000 * 60 * 5,
                        });
                        navigate(`/careers/job?id=${job.id}`);
                      }}
                      className="border-b border-gray-100 hover:shadow-lg hover:bg-white cursor-pointer transition-all duration-200 group bg-white h-20"
                    >
                      <TableCell className="py-6 text-base">
                        <span className="inline-block font-semibold transition-all duration-200 origin-left group-hover:text-primary group-hover:font-bold group-hover:scale-[1.02]">
                          {job.position_name}
                        </span>
                      </TableCell>
                      <TableCell className="py-6 text-base group-hover:text-primary transition-colors">
                        {job.department}
                      </TableCell>
                      <TableCell className="py-6 text-base group-hover:text-primary transition-colors">
                        {job.location_display}
                      </TableCell>
                      <TableCell className="py-6 text-base group-hover:text-primary transition-colors">
                        {job.contract_details === "full_time" ? "Full Time" : job.contract_details}
                      </TableCell>
                      <TableCell className="py-6">
                        <ChevronRight className="w-5 h-5 group-hover:text-primary transition-colors" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  {/* Full pagination for sm+ */}
                  <PaginationContent className="hidden sm:flex">
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage - 1);
                        }}
                        aria-disabled={currentPage === 1}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : undefined}
                      />
                    </PaginationItem>

                    {pageNumbers.map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page);
                          }}
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage + 1);
                        }}
                        aria-disabled={currentPage === totalPages}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : undefined}
                      />
                    </PaginationItem>
                  </PaginationContent>

                  {/* Compact pagination for xs screens */}
                  <PaginationContent className="flex sm:hidden items-center gap-2">
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage - 1);
                        }}
                        aria-disabled={currentPage === 1}
                        className={`px-3 ${currentPage === 1 ? "pointer-events-none opacity-50" : ""}`}
                      />
                    </PaginationItem>
                    <PaginationItem>
                      <span className="text-sm text-gray-600">
                        Page {currentPage} / {totalPages}
                      </span>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage + 1);
                        }}
                        aria-disabled={currentPage === totalPages}
                        className={`px-3 ${currentPage === totalPages ? "pointer-events-none opacity-50" : ""}`}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};
