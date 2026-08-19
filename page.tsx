const projects = [
  { title: "PROJECT 01", type: "VIDEO EDIT", year: "2026" },
  { title: "PROJECT 02", type: "MOTION / VFX", year: "2026" },
  { title: "PROJECT 03", type: "SHORT FORM", year: "2026" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="logo" href="#">VAUREL<span>.</span></a>
        <div className="navLinks">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">VIDEO EDITOR / CREATIVE</p>
        <h1>TURNING<br /><span>FOOTAGE</span><br />INTO IMPACT.</h1>
        <div className="heroBottom">
          <p>Creative editing, motion, and visual storytelling built to make people stop scrolling.</p>
          <a className="button" href="#work">VIEW MY WORK ↘</a>
        </div>
      </section>

      <section id="work" className="section">
        <div className="sectionHead">
          <p className="eyebrow">SELECTED WORK</p>
          <span>03 PROJECTS</span>
        </div>
        <div className="grid">
          {projects.map((project, i) => (
            <article className="project" key={project.title}>
              <div className="projectVisual">
                <span>0{i + 1}</span>
                <div className="play">▶</div>
              </div>
              <div className="projectInfo">
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.type}</p>
                </div>
                <span>{project.year}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="hint">Replace the project cards with your actual edits when you're ready.</p>
      </section>

      <section id="about" className="about section">
        <p className="eyebrow">ABOUT</p>
        <div>
          <h2>I EDIT WITH<br /><span>PURPOSE.</span></h2>
          <p>
            I&apos;m VAUREL, a video editor focused on high-quality gaming,
            commentary, short-form, and cinematic content. I care about
            pacing, sound design, motion, and the small details that make an
            edit feel intentional.
          </p>
        </div>
      </section>

      <section id="contact" className="contact section">
        <p className="eyebrow">LET&apos;S WORK</p>
        <h2>HAVE A PROJECT<br /><span>IN MIND?</span></h2>
        <a className="email" href="mailto:your@email.com">your@email.com ↗</a>
      </section>

      <footer>
        <span>© 2026 VAUREL</span>
        <span>CREATIVE VIDEO EDITING</span>
      </footer>
    </main>
  );
}
