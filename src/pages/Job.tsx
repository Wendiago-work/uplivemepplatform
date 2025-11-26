import { AnimatedLinkText, Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock4, ArrowLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useJob } from "@/hooks/use-jobs";
import { useMemo } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Title } from "@/components/ui/title";

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
    <PageLayout mainClassName="pt-28 pb-16">
      <div className="container px-4 sm:px-6">
        {!jobId ? (
          <div className="text-center">No job selected.</div>
        ) : isLoading ? (
          <div className="text-center">Loading job details...</div>
        ) : isError || !job ? (
          <div className="text-center text-red-500">Unable to load this job right now.</div>
        ) : (
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="flex items-center justify-between">
              <Button
                variant="link"
                size="sm"
                className="px-0 text-primary hover:text-primary no-underline hover:no-underline"
                onClick={() => navigate("/careers#explore-jobs")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                <AnimatedLinkText className="text-primary font-display font-bold">Back to job list</AnimatedLinkText>
              </Button>

              <Button
                variant="tech"
                size="lg"
                className="hidden sm:inline-flex"
                onClick={() => applyUrl && window.open(applyUrl, "_blank")}
              >
                Apply now
              </Button>
            </div>

            {/* Job Header */}
            <div className="space-y-6">
              <Title as="h1" className="text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
                {job.position_name}
              </Title>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Badge variant="outline" className="px-3 py-2 text-xs sm:text-sm font-medium">
                  <MapPin className="w-4 h-4 mr-2" />
                  {locationDisplay}
                </Badge>
                <Badge variant="outline" className="px-3 py-2 text-xs sm:text-sm font-medium">
                  <Clock4 className="w-4 h-4 mr-2" />
                  {formatContract(job.contract_details)}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-3 sm:hidden">
                <Button
                  variant="tech"
                  size="lg"
                  onClick={() => applyUrl && window.open(applyUrl, "_blank")}
                >
                  Apply now
                </Button>
              </div>
            </div>

            {/* Description */}
            <section className="space-y-6">
              {sanitizedDescription ? (
                <div
                  className="leading-relaxed space-y-4 job-rich-text [&>h2]:font-title [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h3]:font-title [&>h3]:text-lg [&>h3]:sm:text-xl [&>h3]:font-semibold [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2 [&>strong]:font-semibold [&_br]:hidden"
                  dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                />
              ) : (
                <p>No description available.</p>
              )}
            </section>

            {/* Apply actions */}
            <div className="md:pt-4 md:border-t flex flex-col sm:flex-row gap-3">
              <Button
                variant="tech"
                size="lg"
                className="font-bold w-full sm:w-auto"
                disabled={!applyUrl}
                onClick={() => applyUrl && window.open(applyUrl, "_blank")}
              >
                Apply now
              </Button>
              {job.hash && (
                <Button
                  variant="tech-outline"
                  size="lg"
                  className="font-bold text-foreground w-full sm:w-auto"
                  onClick={() => window.open(`https://www.careers-page.com/mep-platform/job/${job.hash}`, "_blank")}
                >
                  Share job
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Job;
