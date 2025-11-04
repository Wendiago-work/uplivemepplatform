import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { strings } from "@/lib/strings";
import { careersTeams } from "@/constants/careersTeams";
import { Search, ChevronRight, ChevronsUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
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

const locationOptions = ["Ho Chi Minh City", "Hanoi"] as const;
const workTypeOptions = ["Freelancer", "Fulltime"] as const;

type LocationOption = (typeof locationOptions)[number];
type WorkTypeOption = (typeof workTypeOptions)[number];

type Job = {
  id: number;
  title: string;
  teamId: string;
  location: LocationOption;
  workType: WorkTypeOption;
};

const teamLookup = careersTeams.reduce<Record<string, string>>((acc, team) => {
  acc[team.id] = team.title;
  return acc;
}, {});

const teamOptions = careersTeams.map((team) => ({
  value: team.id,
  label: team.title,
}));

// Mock data - will be replaced with Manatal API
const mockJobs: Job[] = [
  {
    id: 1,
    title: "Senior Product Designer",
    teamId: "product",
    location: "Ho Chi Minh City",
    workType: "Fulltime",
  },
  {
    id: 2,
    title: "Growth Marketing Specialist",
    teamId: "growth",
    location: "Hanoi",
    workType: "Fulltime",
  },
  {
    id: 3,
    title: "Lead Publishing Strategist",
    teamId: "publishing",
    location: "Ho Chi Minh City",
    workType: "Freelancer",
  },
  {
    id: 4,
    title: "Creative Producer",
    teamId: "creative",
    location: "Hanoi",
    workType: "Freelancer",
  },
  {
    id: 5,
    title: "Gameplay Engineer",
    teamId: "tech",
    location: "Ho Chi Minh City",
    workType: "Fulltime",
  },
  {
    id: 6,
    title: "Operations Coordinator",
    teamId: "operations",
    location: "Hanoi",
    workType: "Fulltime",
  },
];

export const ExploreJobs = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [teamFilter, setTeamFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<LocationOption[]>([]);
  const [workTypeFilter, setWorkTypeFilter] = useState<string>("all");

  const handleLocationChange = (value: LocationOption, checked: boolean | "indeterminate") => {
    setLocationFilter((prev) => {
      if (checked === true) {
        if (prev.includes(value)) {
          return prev;
        }
        return [...prev, value];
      }

      return prev.filter((item) => item !== value);
    });
  };

  const clearLocations = () => setLocationFilter([]);

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTeam = teamFilter === "all" || job.teamId === teamFilter;
    const matchesLocation = locationFilter.length === 0 || locationFilter.includes(job.location);
    const matchesWorkType = workTypeFilter === "all" || job.workType === workTypeFilter;

    return matchesSearch && matchesTeam && matchesLocation && matchesWorkType;
  });

  const selectedLocationsLabel =
    locationFilter.length === 0 ? "All Locations" : locationFilter.join(", ");

  return (
    <section id="explore-jobs" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-[1024px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            {strings.careersPage.jobs.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl">
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
              {teamOptions.map((team) => (
                <SelectItem
                  key={team.value}
                  value={team.value}
                  className="text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                >
                  {team.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className="w-full md:w-56 h-12 justify-between bg-gray-50 border-gray-200 text-gray-900 focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900 data-[state=open]:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
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
                  className="text-xs text-blue-600 font-bold disabled:text-gray-400 disabled:no-underline"
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
                  key={option}
                  value={option}
                  className="text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                >
                  {option}
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
          className="text-lg mb-8 text-gray-900"
        >
          We have <span className="text-blue-700 font-semibold">{filteredJobs.length}</span> open positions.
        </motion.p>

        {/* Jobs Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
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
              {filteredJobs.map((job) => (
                <TableRow
                  key={job.id}
                  onClick={() => navigate(`/careers/job?id=${job.id}`)}
                  className="border-b border-gray-100 hover:shadow-lg hover:bg-white cursor-pointer transition-all duration-200 group bg-white h-20"
                >
                  <TableCell className="py-6 text-base">
                    <span className="inline-block font-semibold text-gray-900 transition-all duration-200 origin-left group-hover:text-blue-600 group-hover:font-bold group-hover:scale-[1.02]">
                      {job.title}
                    </span>
                  </TableCell>
                  <TableCell className="py-6 text-base text-gray-700 group-hover:text-blue-600 transition-colors">
                    {teamLookup[job.teamId] ?? job.teamId}
                  </TableCell>
                  <TableCell className="py-6 text-base text-gray-700 group-hover:text-blue-600 transition-colors">
                    {job.location}
                  </TableCell>
                  <TableCell className="py-6 text-base text-gray-700 group-hover:text-blue-600 transition-colors">
                    {job.workType}
                  </TableCell>
                  <TableCell className="py-6">
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
};
