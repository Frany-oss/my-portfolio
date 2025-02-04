import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Work from "./components/Work";

function App() {
  return (
    <div className="bg-primary min-h-screen transition-colors duration-300">
      <Header />
      <main className="container mx-auto px-4 p-8">
        <About />
        <Work />
        {/* <Projects />
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;
