import Hero from "@/components/Hero";
import CurrentLaunches from "@/components/CurrentLaunches";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Hero />

      <main className="flex-grow">
        <CurrentLaunches />
      </main>

    </div>
  );
}
