// src/App.jsx
import { useState } from "react";
import "./App.css";

export default function App() {
  const [active, setActive] = useState("about");

  return (
    <div>
      {/* Header */}
      <header>
        <h1>Dillon Cordova</h1>
        <p>Senior Staff Software Engineer</p>
        <nav>
          {["about", "experience", "projects", "game", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => setActive(section)}
              className={active === section ? "active" : ""}
            >
              {section}
            </button>
          ))}
        </nav>
      </header>

      {/* Sections */}
      <main>
        {active === "about" && (
          <section>
            <h2>About Me</h2>
            <p>
              I’m a Senior Staff Software Engineer with 10+ years of experience designing and
              scaling distributed systems. I’ve built cloud-native architectures, developer
              productivity frameworks, and integrations across complex service layers. Recently at
              Super HiFi, I helped establish AWS foundations during early-stage growth and worked
              with AI-driven audio workflows.
            </p>
          </section>
        )}

        {active === "experience" && (
          <section>
            <h2>Experience</h2>
            <ul>
              <li>
                <strong>Super HiFi</strong> — Senior Staff Software Engineer / Tech Lead
                <br />
                Designed backend architectures, scaled distributed systems, and created developer
                frameworks that improved productivity.
              </li>
              <li>
                <strong>Other Roles</strong> — Senior Engineer, Staff Engineer
                <br />
                Led service layer initiatives, mentored engineers, and optimized CI/CD pipelines.
              </li>
            </ul>
          </section>
        )}

        {active === "projects" && (
          <section>
            <h2>Projects</h2>
            <div>
              <div className="card">
                <h3>GraphQL Auto-Testing Framework</h3>
                <p>Generated automated tests for GraphQL schemas, saving hours of manual testing.</p>
              </div>
              <div className="card">
                <h3>Schema-Based Audit System</h3>
                <p>Automatically audited API transactions, improving reliability and compliance.</p>
              </div>
              <div className="card">
                <h3>CI/CD Automation</h3>
                <p>Serverless AWS pipelines enabling faster and safer releases across environments.</p>
              </div>
            </div>
          </section>
        )}

        {active === "game" && (
          <section>
            <h2>Play My Game</h2>
            <p>Here’s one of my indie games hosted on itch.io — playable right inside this site.</p>
            <iframe
              src="https://html-classic.itch.zone/html/10521670/index.html"
              allowFullScreen
              title="My Indie Game"
              className="game-frame"
            ></iframe>
            <p>
              (Replace the <code>src</code> with your game’s embed link from itch.io.)
            </p>
          </section>
        )}

        {active === "contact" && (
          <section>
            <h2>Contact</h2>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:dillontcordova@gmail.com">dillontcordova@gmail.com</a>
              </li>
              <li>
                LinkedIn:{" "}
                <a href="https://linkedin.com/in/dilloncordova" target="_blank" rel="noreferrer">
                  linkedin.com/in/dilloncordova
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a href="https://github.com/dilloncordova" target="_blank" rel="noreferrer">
                  github.com/dilloncordova
                </a>
              </li>
            </ul>
          </section>
        )}
      </main>

      <footer>
        <p>© 2025 Dillon Cordova</p>
      </footer>
    </div>
  );
}
