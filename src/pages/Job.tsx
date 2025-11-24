import { AnimatedLinkText, Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, Clock4, ArrowLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useJob } from "@/hooks/use-jobs";
import { useMemo } from "react";
import { PageLayout } from "@/components/layout/PageLayout";

const formatContract = (contract?: string | null) => {
  if (!contract) return "Not specified";
  return contract
    .split("_")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
};

import DOMPurify from "dompurify";

const Job = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const jobId = searchParams.get("id");
  const { data: job, isLoading, isError } = useJob(jobId);

  const applyUrl = useMemo(() => {
    if (!job?.hash) return undefined;
    return `https://www.careers-page.com/mep-platform/job/${job.hash}/apply`;
  }, [job?.hash]);

  const locationDisplay = useMemo(() => {
    if (job?.location_display) return job.location_display;
    const fallback = [job?.city, job?.state, job?.country].filter(Boolean).join(", ");
    if (fallback) return fallback;
    return job?.is_remote ? "Remote" : "Location not specified";
  }, [job?.location_display, job?.city, job?.state, job?.country, job?.is_remote]);

  const sanitizedDescription = useMemo(() => {
    if (!job?.description) return "";
    return DOMPurify.sanitize(job.description);
  }, [job?.description]);

  return (
    <PageLayout mainClassName="pt-32 pb-16">
      <div className="container">
        {!jobId ? (
          <div className="text-center">No job selected.</div>
        ) : isLoading ? (
          <div className="text-center">Loading job details...</div>
        ) : isError || !job ? (
          <div className="text-center text-red-500">Unable to load this job right now.</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Button
                  variant="link"
                  size="sm"
                  className="px-0 text-primary hover:text-primary no-underline hover:no-underline"
                  onClick={() => navigate("/careers#explore-jobs")}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <AnimatedLinkText className="text-primary font-medium">Back to job list</AnimatedLinkText>
                </Button>
              </div>
              {/* Job Header */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{job.position_name}</h1>

                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                    <MapPin className="w-4 h-4 mr-2" />
                    {locationDisplay}
                  </Badge>
                  {/* <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                    <Home className="w-4 h-4 mr-2" />
                    {job.is_remote ? "Remote" : "On-site / Hybrid"}
                  </Badge> */}
                  <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                    <Clock4 className="w-4 h-4 mr-2" />
                    {formatContract(job.contract_details)}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="tech"
                    size="lg"
                    className="font-bold"
                    onClick={() => applyUrl && window.open(applyUrl, "_blank")}
                  >
                    Apply now
                  </Button>
                </div>
              </div>

              {/* Description */}
              <section className="mb-10">
                {sanitizedDescription ? (
                  <div
                    className="leading-relaxed space-y-4 job-rich-text [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h3]:text-xl [&>h3]:font-medium [&>h3]:text-gray-900 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2 [&>strong]:font-semibold [&_br]:hidden"
                    dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                  />
                ) : (
                  <p>No description available.</p>
                )}
              </section>

              {/* Bottom Apply Button */}
              <div className="pt-6 border-t flex flex-wrap gap-3">
                <Button
                  variant="tech"
                  size="lg"
                  className="font-bold"
                  disabled={!applyUrl}
                  onClick={() => applyUrl && window.open(applyUrl, "_blank")}
                >
                  Apply now
                </Button>
                {job.hash && (
                  <Button
                    variant="tech-outline"
                    size="lg"
                    className="font-bold text-foreground"
                    onClick={() => window.open(`https://www.careers-page.com/mep-platform/job/${job.hash}`, "_blank")}
                  >
                    Share job
                  </Button>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <p className="text-sm mb-2">Position ID</p>
                  <p className="text-lg font-semibold">{job.id}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 space-y-3">
                  <p className="text-sm">Contract type</p>
                  <p className="font-medium">{formatContract(job.contract_details)}</p>

                  <p className="text-sm mt-4">Workplace</p>
                  <p className="font-medium">{job.is_remote ? "Remote" : locationDisplay}</p>

                  {job.location_display && <p className="text-sm mt-4">Location display</p>}
                  {job.location_display && <p className="font-medium">{job.location_display}</p>}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Job;
