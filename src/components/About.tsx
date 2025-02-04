import React from "react";
import ProfileImage from "../assets/profile.png";

const About: React.FC = () => {
  return (
    <section id="about" className="my-12">
      <div className="bg-primary p-8 rounded-lg min-h-[650px] flex items-center justify-center">
        <div className="relative w-[350px] h-[350px] flex items-center justify-center">
          <div className="absolute inset-0 pr-8">
            <svg width="100%" height="100%" viewBox="0 0 400 400">
              <rect x="0" y="0" width="400" height="400" fill="#121F2F" />
              <rect x="20" y="20" width="360" height="360" fill="#F7B176" />
              <rect x="40" y="40" width="320" height="320" fill="#121F2F" />
            </svg>
          </div>
          <img
            src={ProfileImage}
            alt="Francesco Bassino"
            className="relative z-10 w-[350px] h-auto rounded-lg object-cover pr-8"
          />
        </div>
        <div className="h-[500px] border-l-4 border-secondary-orange mx-8"></div>
        <div className="w-1/2 pl-8">
          <h2 className="text-9xl font-bold text-secondary-white mb-4">Hi, I'm Francesco</h2>
          <p className="text-2xl text-secondary-dark-3">
            Passionate FullStack Developer crafting scalable web solutions with over 3.5 years of
            hands-on experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
