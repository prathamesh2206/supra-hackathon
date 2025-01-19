import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-b from-background to-background/95">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-foreground max-w-4xl mx-auto leading-tight tracking-tight mb-8">
          Optimize your smart contracts with{" "}
          <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/90">
            ASCO
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Enhance and Optimize your Supra Smart Contracts Development with our
          AI. Deploy to the Supra Blockchain
        </p>
        <div className="flex gap-4">
          <Link
            href="/get-started"
            className="px-8 py-3 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium"
          >
            Get Started
          </Link>
          <Link
            href="/learn-more"
            className="px-8 py-3 rounded-md border border-foreground text-foreground hover:bg-foreground/10 transition-colors font-medium"
          >
            Learn More
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
