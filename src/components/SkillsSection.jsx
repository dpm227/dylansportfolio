import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Backend
  { name: "C#", level: 80, category: "backend" },
  { name: "ASP.NET", level: 75, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "REST APIs", level: 80, category: "backend" },
  { name: "SQL", level: 50, category: "backend" },

  // Frontend
  { name: "HTML/CSS", level: 70, category: "frontend" },
  { name: "React", level: 50, category: "frontend" },
  { name: "JavaScript", level: 75, category: "frontend" },
  { name: "Flutter", level: 50, category: "frontend" },

  // Systems / Core CS
  { name: "Java", level: 70, category: "systems" },
  { name: "C++", level: 60, category: "systems" },
  { name: "Linux/UNIX", level: 85, category: "systems" },
  { name: "Windows", level: 80, category: "systems" },

  // Tools & DevOps
  { name: "Git", level: 80, category: "tools" },
  { name: "Microsoft Azure", level: 60, category: "tools" },
  { name: "Firebase Cloud Messaging", level: 90, category: "tools" },
  { name: "Atlassian Forge", level: 75, category: "tools" },
  { name: "Jira API", level: 75, category: "tools" },
  { name: "Auth0", level: 75, category: "tools" },

  // Soft/Team
  { name: "Agile Development", level: 75, category: "soft" },
  { name: "Documentation & Reporting", level: 75, category: "soft" },
];

const categories = ["all", "backend", "frontend", "systems", "tools", "soft"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
