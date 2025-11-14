import { ExternalLink, Github, ArrowRight } from "lucide-react";

const isValidUrl = (u) => !!u && u !== "none" && u.trim() !== "";

// safely prefix relative paths with Vite base
const withBase = (path) => {
  if (!path) return path;
  // leave absolute URLs alone
  if (/^https?:\/\//i.test(path)) return path;

  const base = import.meta.env.BASE_URL || "/";
  // normalize leading slash
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${clean}`;
};

const projects = [
  {
    id: 4,
    title: "LU 360 Advising Tool",
    description:
      "The LU360 Advising Tool is a full-stack web app built to help academic advisors easily record, manage, and summarize their meetings with students. It features secure Auth0 login, a responsive React interface, and an Azure SQL database for storing transcripts, summaries, users, and students. The platform also supports transcript processing using GPT-4o Transcribe.",
    image: "/projects/project4.png",
    tags: [
      "Flutter",
      "Python",
      "React",
      "Auth0",
      "JavaScript",
      "HTML",
      "Azure SQL Database",
    ],
    demoURl: "none",
    githubUrl: "https://github.com/dpm227/lehigh360-advising-tool",
  },
  {
    id: 2,
    title: "Valley Guard",
    description:
      "ValleyGuard is a full-stack web application originally built for the Leh-Laf Hackathon to report and visualize environmental or safety incidents in the Lehigh Valley. It features a React frontend and a serverless AWS backend using Lambda, DynamoDB, and API Gateway to handle real-time report submissions and map visualization. The project has since been reworked into a modern React-based version with improved scalability, interactivity, and design.",
    image: "/projects/project2.png",
    tags: [
      "AWS Lambda",
      "AWS DynamoDB",
      "AWS API Gateway",
      "Python",
      "JavaScript",
      "React",
      "HTML",
      "Tailwind CSS",
    ],
    demoURl: "https://dpm227.github.io/valleyguard/",
    githubUrl: "https://github.com/dpm227/valleyguard",
  },
  {
    id: 5,
    title: "This Portfolio Site",
    description:
      "This is my personal developer portfolio built with React, Tailwind CSS, and Lucide Icons. It showcases my projects, experience, and technical skills in a clean, responsive design with light/dark mode and smooth animations. Originally inspired by a YouTube tutorial, I customized it extensively with new sections, refined components, and personalized branding to reflect my work as a full-stack developer.",
    image: "/projects/project5.png",
    tags: ["React", "HTML", "Tailwind CSS", "JavaScript"],
    demoURl: "#",
    githubUrl: "https://github.com/dpm227/dylansportfolio",
  },
  {
    id: 3,
    title: "Mesozoic Runner",
    description:
      "Top-down, runner game desgined to be played in a Museum.\nThird Place 🥉 TSA PA Conference\n First Place 🥇 TSA Region 3",
    image: "/projects/project3.png",
    tags: ["Unity", "C#"],
    demoURl: "https://dmac85w.itch.io/mesozoic-runner",
    githubUrl: "none",
  },
  {
    id: 1,
    title: "Movie Browser",
    description:
      "Movie browsing app to look up and get information about your favorite movies",
    image: "/projects/project1.png",
    tags: ["React", "HTML", "CSS"],
    demoURl: "https://dpm227.github.io/Movie_Browser/",
    githubUrl: "https://github.com/dpm227/Movie_Browser",
  },
  {
    id: 6,
    title: "Food for Thought",
    description:
      "2D Platformer game designed to spread awareness of food insecurity",
    image: "/projects/project6.png",
    tags: ["TypeScript", "Node", "Jet Lag Engine"],
    demoURl: "https://www.cse.lehigh.edu/~spear/eng5_2023/engr_005_fl_2023_N/",
    githubUrl: "https://github.com/dpm227/FoodForThought",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects I’ve built for hackathons, competitions, and
          to expand my skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            // support either demoUrl or demoURl key
            const demoUrl = project.demoUrl ?? project.demoURl;

            return (
              <div
                key={project.id}
                className="group bg-card rounded-sm overflow-hidden shadow-xs card-hover"
              >
                <div className="h-70 overflow-hidden">
                  <img
                    // route image paths through withBase
                    src={withBase(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={`${project.id}-tag-${i}`}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 whitespace-pre-line">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {isValidUrl(demoUrl) && (
                        <a
                          href={demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          aria-label={`${project.title} demo`}
                          title="Live demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}

                      {isValidUrl(project.githubUrl) && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          aria-label={`${project.title} GitHub`}
                          title="GitHub repo"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dpm227"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
