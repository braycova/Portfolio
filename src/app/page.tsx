import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className="lg:flex max-w-screen-xl mx-auto lg:gap-4 leading-relaxed selection:bg-indigo-400">
      <Header />
      <Portfolio />
    </div>
  );
}
