import Card from "@/components/home-card";
import SideBar from "@/components/right-side";

export default function Home() {
  return (
    <main>
      <div className="max-w-[70rem] mx-auto py-5 flex flex-col lg:flex-row gap-8 px-1">
        <Card />
        <SideBar />
      </div>
    </main>
  );
}
