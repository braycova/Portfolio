import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto leading-relaxed selection:bg-indigo-400 px-2">
      <Navigation />
      <Header />
      <Portfolio />
    </div>
  );
}
