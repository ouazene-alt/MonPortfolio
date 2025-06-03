
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block">Bonjour, je suis</span>
            <span className="text-primary">Céline Ouazene</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
          Conceptrice Développeuse d’Applications & Développeuse web

— je conçois des lignes de code qui parlent aux machines... mais surtout aux humains.
          </p>
          <div>
            <a
              href="#projects"
              className="inline-flex items-center text-primary hover:underline"
            >
              Voir mes projets
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
