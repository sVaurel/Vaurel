export default function Home() {
  return (
    <main className="home">
      <header className="nav">
        <nav className="navLeft" aria-label="Main navigation">
          <a href="/">HOME</a>
          <a href="/projects">PROJECTS</a>
          <a href="/shop">SHOP</a>
        </nav>

        <a className="contactLink" href="/contact">
          GET IN TOUCH
        </a>
      </header>

      <section className="homeImage" aria-label="VAUREL YouTube channel">
        <img
          src="/vaurel-youtube.png"
          alt="VAUREL YouTube channel"
        />
      </section>

      <div className="homeSpacer" />

      <footer>
        <span>© 2026 VAUREL</span>
        <span>CREATIVE VIDEO EDITING</span>
      </footer>
    </main>
  );
}
