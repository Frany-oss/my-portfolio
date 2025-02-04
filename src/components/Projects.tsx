import React from "react";

const Projects: React.FC = () => {
  const projects = [
    { id: 1, name: "Project 1", description: "A modern web app." },
    { id: 2, name: "Project 2", description: "An AI-powered tool." },
    { id: 3, name: "Project 3", description: "A blockchain-based solution." },
  ];

  return (
    <section id="projects" className="my-12">
      <h2 className="text-2xl font-bold text-secondary-green mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-primary p-6 rounded-lg border border-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-shadow"
          >
            <h3 className="text-xl font-bold text-secondary-blue">{project.name}</h3>
            <p className="text-dark-text mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
