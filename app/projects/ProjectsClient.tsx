"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type ProjectKey = "edits" | "music" | "game" | "design";

const projects: Record<
  ProjectKey,
  { label: string; title: string; description: string; theme: string; number: string }
> = {
  edits: {
    label: "EDITS",
    title: "edited VOD",
    description:
      "Long-form edits, pacing, sound design, motion, and storytelling built from raw footage.",
    theme: "theme-edits",
    number: "01",
  },
  music: {
    label: "MUSIC",
    title: "beats",
    description:
      "Original beats and sound experiments designed to give visual work its own rhythm.",
    theme: "theme-music",
    number: "02",
  },
  game: {
    label: "GAME",
    title: "EmberDeep",
    description:
      "An original game project with its own world, systems, atmosphere, and visual direction.",
    theme: "theme-game",
    number: "03",
  },
  design: {
    label: "DESIGN",
    title: "logo",
    description:
      "Brand identities, graphics, layouts, and visual systems made to feel instantly recognizable.",
    theme: "theme-design",
    number: "04",
  },
};

export default function ProjectsClient() {
  const [active, setActive] = useState<ProjectKey>("edits");
  const project = projects[active];

  return (
    <main className={`site-shell projects-page ${project.theme}`}>
      <Nav active="projects" />

      <section className="projects-stage">
        <div className="project-menu" aria-label="Project categories">
          {(Object.keys(projects) as ProjectKey[]).map((key) => (
            <button
              key={key}
              type="button"
              className={active === key ? "project-tab active" : "project-tab"}
              aria-pressed={active === key}
              onMouseEnter={() => setActive(key)}
              onFocus={() => setActive(key)}
              onClick={() => setActive(key)}
            >
              {projects[key].label}
            </button>
          ))}
        </div>

        <div className="project-feature" key={active}>
          <div className="project-number">{project.number}</div>
          <div className="project-title-wrap">
            <p className="eyebrow">SELECTED PROJECT / {project.label}</p>
            <h1>{project.title}</h1>
            <p className="project-description">{project.description}</p>
          </div>
          <div className="project-media-slot" aria-label={`${project.title} media placeholder`}>
            <span>MEDIA / MOTION SLOT</span>
            <small>READY FOR FUTURE MOTION GRAPHICS</small>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
