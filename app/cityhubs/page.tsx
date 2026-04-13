import CityHubsDetails from "@/components/ProjectDetails/CityHubsDetails";

export const metadata = {
  title: "CityHubs - City Community Platform | InfoBluera",
  description: "Explore CityHubs - A city information and local business community platform for connecting residents and businesses.",
};

export default function CityHubsPage() {
  return (
    <main className="min-h-screen bg-[#040718]">
      <CityHubsDetails />
    </main>
  );
}
