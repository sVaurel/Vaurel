import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="site-shell home-page">
      <header className="nav">
        <nav className="nav-left" aria-label="Primary navigation">
          <Link href="/">HOME</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/shop">SHOP</Link>
        </nav>
        <Link className="nav-contact" href="/contact">GET IN TOUCH</Link>
      </header>

      <section className="home-hero" aria-label="VAUREL home">
        <div className="home-copy">
          <p className="eyebrow">VAUREL / CREATIVE WORK</p>
          <h1>CREATIVE<br /><span>COMMENTARY.</span></h1>
          <p className="home-description">
            Editing, music, games, and design — built with an emphasis on strong ideas,
            clean visuals, and personality.
          </p>
          <div className="home-actions">
            <Link className="primary-button" href="/projects">VIEW PROJECTS ↘</Link>
            <Link className="text-link" href="/contact">GET IN TOUCH ↗</Link>
          </div>
        </div>

        <div className="channel-card">
          <Image
            src="/vaurel-youtube.png"
            alt="VAUREL YouTube channel"
            width={607}
            height={255}
            priority
            className="channel-image"
          />
        </div>
      </section>

      <section className="home-intro">
        <p className="eyebrow">WHAT I DO</p>
        <div className="intro-grid">
          <h2>IDEAS INTO<br /><span>IDENTITY.</span></h2>
          <p>
            VAUREL is a creative space for video editing, music, game development,
            and visual design. The site is structured so new work, case studies,
            motion graphics, and interactive pieces can be added without rebuilding it.
          </p>
        </div>
      </section>

      <footer>
        <span>© 2026 VAUREL</span>
        <span>CREATIVE VIDEO EDITING</span>
      </footer>
    </main>
  );
}
