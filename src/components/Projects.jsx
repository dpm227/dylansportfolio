import { ExternalLink, Github, ArrowRight } from "lucide-react";

const isValidUrl = (u) => !!u && u !== "none" && u.trim() !== "";

const projects = [
  {
    id: 4,
    title: "LU 360 Advising Tool",
    description:
      "Advising Tool created for LU360 to record and summarize meetings",
    image: "/projects/project4.png",
    tags: ["Flutter", "Python", "HTML", "React"],
    demoURl: "none",
    githubUrl: "https://github.com/dpm227/lehigh360-advising-tool",
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
    id: 2,
    title: "Valley Guard",
    description:
      "This application displays locations of reported incidents in your community",
    image: "/projects/project2.png",
    tags: ["AWS Lambda", "AWS DynamoDB", "Python", "HTML", "CSS"],
    demoURl: "none",
    githubUrl: "https://github.com/dpm227/communitymapp",
  },
  {
    id: 3,
    title: "Mesozoic Runner",
    description:
      "Top-down, runner-style, video game meant to be an arcade game played in a museum. It won third place in the Technology Student Association PA Conference",
    image: "/projects/project3.png",
    tags: ["Unity", "C#"],
    demoURl: "https://dmac85w.itch.io/mesozoic-runner",
    githubUrl: "none",
  },
  {
    id: 5,
    title: "This Portfolio Site",
    description: "Website to showcase my skills and projects!",
    image: "/projects/project5.png",
    tags: ["React", "HTML", "CSS"],
    demoURl: "#",
    githubUrl: "https://github.com/dpm227/dylansportfolio",
  },
  {
    id: 6,
    title: "Food for Thought",
    description: "2D Platformer to spread awareness of food insecurity",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            // support either demoUrl or demoURl key
            const demoUrl = project.demoUrl ?? project.demoURl;

            return (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
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
                  <p className="text-muted-foreground text-sm mb-4">
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
