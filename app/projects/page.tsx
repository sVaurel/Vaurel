import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected VAUREL projects across video edits, music, game design, and brand design.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
