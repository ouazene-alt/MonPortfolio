
import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          À propos <span className="text-primary">de moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
              <User /> Présentation
            </h3>
            <p className="text-muted-foreground">
            
              Entre logique, design et compréhension du besoin, je développe des solutions qui ont du sens.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
              <Briefcase /> Objectif
            </h3>
            <p className="text-muted-foreground">
              En alternance en Bachelor Conception Développement d’Applications, je recherche une entreprise
              où je peux contribuer activement tout en montant en compétences sur des projets concrets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
