import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-bg-primary min-h-screen transition-colors duration-300">
      <Header />
      <main className="container mx-auto p-8">
        <About />
        <Experience />
        {/* <Projects />
        <Contact /> */}
        <Skills/>
      </main>
    </div>
  );
}

export default App;
