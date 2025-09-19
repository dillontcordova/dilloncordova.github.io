// src/App.jsx
import { useState } from "react";

export default function App() {
  const [active, setActive] = useState("about");

  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white p-6 text-center shadow-lg">
        <h1 className="text-3xl font-bold">Dillon Cordova</h1>
        <p className="mt-2 text-lg">Senior Staff Software Engineer</p>
        <nav className="mt-4 space-x-4">
          {["about", "experience", "projects", "game", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => setActive(section)}
              className={`capitalize px-3 py-1 rounded ${
                active === section ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
            >
              {section}
            </button>
          ))}
        </nav>
      </header>

      {/* Sections */}
      <main className="max-w-4xl mx-auto p-6">
        {active === "about" && (
          <section>
            <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">About Me</h2>
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
            <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">Experience</h2>
            <ul className="space-y-4">
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
            <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">Projects</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white shadow rounded">
                <h3 className="font-semibold">GraphQL Auto-Testing Framework</h3>
                <p>Generated automated tests for GraphQL schemas, saving hours of manual testing.</p>
              </div>
              <div className="p-4 bg-white shadow rounded">
                <h3 className="font-semibold">Schema-Based Audit System</h3>
                <p>Automatically audited API transactions, improving reliability and compliance.</p>
              </div>
              <div className="p-4 bg-white shadow rounded">
                <h3 className="font-semibold">CI/CD Automation</h3>
                <p>Serverless AWS pipelines enabling faster and safer releases across environments.</p>
              </div>
            </div>
          </section>
        )}

        {active === "game" && (
          <section>
            <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">Play My Game</h2>
            <p className="mb-4">
              Here’s one of my indie games hosted on itch.io — playable right inside this site.
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://html-classic.itch.zone/html/10521670/index.html" 
                allowFullScreen
                title="My Indie Game"
                className="w-full h-[600px] border rounded shadow"
              ></iframe>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              (Replace the <code>src</code> with your game’s embed link from itch.io.)
            </p>
          </section>
        )}

        {active === "contact" && (
          <section>
            <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">Contact</h2>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:dillontcordova@gmail.com" className="text-blue-600">dillontcordova@gmail.com</a></li>
              <li>LinkedIn: <a href="https://linkedin.com/in/dilloncordova" target="_blank" rel="noreferrer" className="text-blue-600">linkedin.com/in/dilloncordova</a></li>
              <li>GitHub: <a href="https://github.com/dilloncordova" target="_blank" rel="noreferrer" className="text-blue-600">github.com/dilloncordova</a></li>
            </ul>
          </section>
        )}
      </main>

      <footer className="text-center p-4 bg-gray-900 text-white mt-6">
        <p>© 2025 Dillon Cordova</p>
      </footer>
    </div>
  );
}
