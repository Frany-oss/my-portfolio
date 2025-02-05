import React from "react";

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      position: "Fullstack Developer",
      company: "Linkroom",
      country: "Chicago, USA",
      date: "Apr 2023 - Jan 2025",
      description: "Developed scalable fullstack applications using NestJS and Angular for immersive virtual reality rooms on web. Design and developed payment systems with Stripe to ensure secure transactions and subscriptions. Lead the developement of a new fan experience for the Ohio State University, where fans can meet their favorite star. Delpoyed services on AWS as well as use GCP for Run Time Functions.",
      tags: ["TypeScript", "NestJS", "Angular", "Firebase", "Stripe", "AWS", "NodeJS", "Agora"],
    },
    {
      id: 2,
      position: "Teacher's Asistent",
      company: "Universidad Peruana de Ciencias Aplicadas",
      country: "Lima, Perú",
      date: "May 2024 - Dic 2024",
      description: "In charged of academic research in AI, Machine Learning and Computar Vision for thesis projects. I also adviced and helped students write papers for scientific publications at international conferences. Supported video production on innovative theses, highliting their contributons.",
      tags: ["ML", "AI", "Computer Vision"],
    },
    {
      id: 3,
      position: "Artificial Intelligence Developer / Fullstack Developer",
      company: "SerpGuru",
      country: "Miami, USA",
      date: "Sep 2021 - Apr 2023",
      description: "I trained complex NLP GPT-3 models using over 1.5 million words and developed Python scripts for data training, analysis, and generation. I large datasets to enhance AI model quality, while leading meetings with companies in LATAM and the USA to demonstrate the BryceAI tool. Additionally, I implemented a web application using React, MongoDB, and NodeJS, optimized OpenAI integration for rapid responses, designed AWS cloud architecture, and managed customer workflows using Freshworks CRM.",
      tags: ["ML", "React", "MongoDB", "AWS", "Python", "OpenAI", "GTP-3", "NLP", "NodeJS"],
    },
    {
      id: 4,
      position: "Fullstack Developer",
      company: "Universidad Peruana de Ciencias Aplicadas",
      country: "Lima, Perú",
      date: "Jun 2021 - Sep 2021",
      description: "In charged of academic research in AI, Machine Learning and Computar Vision for thesis projects. I also adviced and helped students write papers for scientific publications at international conferences. Supported video production on innovative theses, highliting their contributons.",
      tags: ["Java", "Spring Boot", "Angular", "PostgreSQL", "TypeScript"],
    },
  ];

  return (
    <section id="experience" className="my-12">
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl text-secondary-orange mb-6 font-sans">My Experience</h1>
        <div className="space-y-6">
          {experiences.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-2xl shadow-lg bg-secondary-dark hover:shadow-2xl transition"
            >
              <h2 className="text-2xl text-secondary-dark-3 font-sans">{job.position}</h2>
              <p className="text-lg text-gray-300 font-sans">
                {job.company} - {job.country}
              </p>
              <p className="text-sm text-gray-500 mb-2">{job.date}</p>
              <p className="text-gray-400 font-sans">{job.description}</p>

              {/* Tags Section */}
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag, index) => (
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

export default Experience;
