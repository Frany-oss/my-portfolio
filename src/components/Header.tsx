import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-bg-primary py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-bold text-secondary-dark-3 font-mono ">My Portfolio</h1>
        <img
            src={rocket}
            alt="Animated GIF"
            className="w-12 h-12"
          />
        </div> */}

        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-secondary-dark-3 font-sans hover:text-secondary-orange transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="text-secondary-dark-3 font-sans hover:text-secondary-orange transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-secondary-dark-3 font-sans hover:text-secondary-orange transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-secondary-dark-3 font-sans hover:text-secondary-orange transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-secondary-dark-3 font-sans hover:text-secondary-orange transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;