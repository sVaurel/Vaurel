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

      <section className="home-image-full" aria-label="VAUREL YouTube channel">
        <Image
          src="/vaurel-youtube.png"
          alt="VAUREL YouTube channel"
          width={1920}
          height={806}
          priority
          className="home-image-full-img"
        />
      </section>

      <footer>
        <span>© 2026 VAUREL</span>
        <span>CREATIVE VIDEO EDITING</span>
      </footer>
    </main>
  );
}
