
import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 95, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "Django", level: 70, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "Java", level: 75, category: "backend" },
  { name: "C", level: 60, category: "backend" },
  { name: "MySQL", level: 85, category: "database" },
  { name: "SQL", level: 80, category: "database" },
  { name: "JSON", level: 85, category: "database" },
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Agile", level: 85, category: "methods" },
  { name: "MVC", level: 80, category: "methods" }
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Compétences</h2>
        <div className="flex justify-center mb-6 space-x-4">
          {["all", "frontend", "backend", "database", "tools", "methods"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-700 text-gray-300"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded">
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <div className="w-full bg-gray-600 h-2 rounded mt-2">
                <div
                  className="bg-primary h-2 rounded"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
