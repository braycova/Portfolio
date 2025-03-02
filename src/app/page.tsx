import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen dark:bg-gray-900">
      <Contact />
      <Portfolio />
    </div>
  );
}
