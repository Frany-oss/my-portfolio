import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      type: "Backend",
      description: "A modern web app.",
      tags: ["Backend", "NodeJS", "Websockets"],
    },
    {
      id: 2,
      name: "Project 2",
      type: "Fullstack",
      description: "An AI-powered tool.",
      tags: ["TypeScript", "NestJS", "Angular", "Firebase", "Stripe", "AWS", "NodeJS", "Agora"],
    },
    {
      id: 3,
      name: "Project 3",
      type: "Backend",
      description: "A blockchain-based solution.",
      tags: ["TypeScript", "NestJS", "Angular", "Firebase", "Stripe", "AWS", "NodeJS", "Agora"],
    },
  ];

  return (
    <section id="projects" className="my-12">
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl text-secondary-orange mb-6 font-sans">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl shadow-lg bg-secondary-dark hover:shadow-2xl transition"
            >
              <h3 className="text-2xl text-secondary-dark-3 font-sans">{project.name}</h3>
              <p className="text-gray-400 font-sans">{project.description}</p>
              {/* Tags Section */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm text-secondary-orange border border-secondary-orange rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
