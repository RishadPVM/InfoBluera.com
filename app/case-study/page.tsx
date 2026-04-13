import StandardOfExcellence from "@/components/StandardOfExcellence";

export const metadata = {
  title: "Our Standard of Excellence - Case Study | InfoBluera",
  description: "Discover our comprehensive workflow and process that delivers exceptional results from initial consultation to post-launch support.",
  openGraph: {
    title: "Our Standard of Excellence - Case Study",
    description: "Discover our comprehensive workflow and process that delivers exceptional results.",
  },
};

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary overflow-hidden">
      <StandardOfExcellence />
    </main>
  );
}
