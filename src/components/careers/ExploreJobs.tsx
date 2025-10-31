import { motion } from "framer-motion";
import { useState } from "react";
import { strings } from "@/lib/strings";
import { Search, ChevronDown, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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

// Mock data - will be replaced with Manatal API
const mockJobs = [
  {
    id: 1,
    title: "Senior Product Designer",
    team: "Gaming",
    location: "Paris",
    workType: "Remote",
  },
  {
    id: 2,
    title: "Game Developer - Portfolio Games",
    team: "Gaming",
    location: "Paris",
    workType: "Remote",
  },
  {
    id: 3,
    title: "Product Manager - Paper.io 2",
    team: "Gaming",
    location: "Amsterdam",
    workType: "Hybrid",
  },
  {
    id: 4,
    title: "Senior Backend Engineer (Golang) - Color Clash",
    team: "Gaming",
    location: "Barcelona",
    workType: "Remote",
  },
  {
    id: 5,
    title: "Frontend Engineer - Apps",
    team: "Apps",
    location: "Remote",
    workType: "Remote",
  },
  {
    id: 6,
    title: "Growth Marketing Manager",
    team: "Growth",
    location: "London",
    workType: "Hybrid",
  },
];

export const ExploreJobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [teamFilter, setTeamFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [workTypeFilter, setWorkTypeFilter] = useState("all");

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTeam = teamFilter === "all" || job.team === teamFilter;
    const matchesLocation = locationFilter === "all" || job.location === locationFilter;
    const matchesWorkType = workTypeFilter === "all" || job.workType === workTypeFilter;
    
    return matchesSearch && matchesTeam && matchesLocation && matchesWorkType;
  });

  return (
    <section id="explore-jobs" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
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
              className="pl-10 h-12 bg-gray-50 border-gray-200 text-gray-900"
            />
          </div>
          
          <Select value={teamFilter} onValueChange={setTeamFilter}>
            <SelectTrigger className="w-full md:w-48 h-12 bg-gray-50 border-gray-200 text-gray-900">
              <SelectValue placeholder="Team" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200">
              <SelectItem value="all">All Teams</SelectItem>
              <SelectItem value="Gaming">Gaming</SelectItem>
              <SelectItem value="Apps">Apps</SelectItem>
              <SelectItem value="Growth">Growth</SelectItem>
              <SelectItem value="Engineering">Engineering</SelectItem>
            </SelectContent>
          </Select>

          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-full md:w-48 h-12 bg-gray-50 border-gray-200 text-gray-900">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200">
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="Paris">Paris</SelectItem>
              <SelectItem value="Amsterdam">Amsterdam</SelectItem>
              <SelectItem value="Barcelona">Barcelona</SelectItem>
              <SelectItem value="London">London</SelectItem>
              <SelectItem value="Remote">Remote</SelectItem>
            </SelectContent>
          </Select>

          <Select value={workTypeFilter} onValueChange={setWorkTypeFilter}>
            <SelectTrigger className="w-full md:w-48 h-12 bg-gray-50 border-gray-200 text-gray-900">
              <SelectValue placeholder="Work Type" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200">
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Remote">Remote</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
              <SelectItem value="On-site">On-site</SelectItem>
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
          We have <span className="text-primary font-semibold">{filteredJobs.length}</span> open positions.
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
                  className="border-b border-gray-100 hover:shadow-lg cursor-pointer transition-all duration-200 group bg-white h-20"
                >
                  <TableCell className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors py-6">{job.title}</TableCell>
                  <TableCell className="text-gray-700 group-hover:text-blue-600 transition-colors py-6">{job.team}</TableCell>
                  <TableCell className="text-gray-700 group-hover:text-blue-600 transition-colors py-6">{job.location}</TableCell>
                  <TableCell className="text-gray-700 group-hover:text-blue-600 transition-colors py-6">{job.workType}</TableCell>
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
