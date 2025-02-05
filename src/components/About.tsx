import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Francesco Bassino";
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
        setShowCursor(false);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section id="about" className="w-full py-20 flex flex-col items-center text-center">
      <div className="max-w-3xl">
        {/* Animated Header */}
        <h2 className="text-8xl text-secondary-white mb-6 font-sans">
          <span>{text}</span>
          {!isTypingComplete && (
            <span
              className={`inline-block w-2 h-24 bg-secondary-white ml-2 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            ></span>
          )}
        </h2>

        {/* Description */}
        <p className="text-1xl text-secondary-dark-3 font-sans w-3/5 mx-auto mb-6 py-4">
          Passionate FullStack Developer crafting scalable web solutions with over 3.5 years of hands-on experience.
        </p>

        {/* Divider with Icons (Aligned & Spaced) */}
        <div className="w-3/5 mx-auto flex items-center justify-center gap-8">
          <hr className="flex-1 border-secondary-orange" />
          <a href="https://github.com/Frany-oss" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl text-secondary-white hover:text-secondary-orange transition" />
          </a>
          <a href="https://www.linkedin.com/in/francesco-bassino/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-4xl text-secondary-white hover:text-secondary-orange transition" />
          </a>
          <hr className="flex-1 border-secondary-orange" />
        </div>
      </div>
    </section>
  );
};

export default About;