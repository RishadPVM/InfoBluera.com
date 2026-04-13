import HiraAyurvedicDetails from "@/components/ProjectDetails/HiraAyurvedicDetails";

export const metadata = {
  title: "Hira Ayurvedic Hospital - Website | InfoBluera",
  description: "Explore Hira Ayurvedic Hospital - An informational website for Ayurvedic hospital services and treatment information.",
};

export default function HiraAyurvedicPage() {
  return (
    <main className="min-h-screen bg-[#040718]">
      <HiraAyurvedicDetails />
    </main>
  );
}
