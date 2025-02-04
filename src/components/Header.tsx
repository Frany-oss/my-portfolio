import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-primary py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-secondary-dark-3 font-mono">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-secondary-dark-3 hover:text-secondary-orange transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="text-secondary-dark-3 hover:text-secondary-orange transition-colors">
                Work
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-secondary-dark-3 hover:text-secondary-orange transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-secondary-dark-3 hover:text-secondary-orange transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-secondary-dark-3 hover:text-secondary-orange transition-colors"
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