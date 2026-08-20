import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="site-shell inner-page contact-page">
      <header className="nav">
        <nav className="nav-left" aria-label="Primary navigation">
          <Link href="/">HOME</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/shop">SHOP</Link>
        </nav>
        <Link className="nav-contact active-link" href="/contact">GET IN TOUCH</Link>
      </header>

      <section className="inner-hero contact-hero">
        <p className="eyebrow">VAUREL / CONTACT</p>
        <h1>LET&apos;S<br /><span>CREATE.</span></h1>
        <p>Have a project, edit, design, or collaboration in mind?</p>
        <a className="email-link" href="mailto:vaurelhq@gmail.com">vaurelhq@gmail.com ↗</a>
      </section>

      <footer>
        <span>© 2026 VAUREL</span>
        <span>CREATIVE VIDEO EDITING</span>
      </footer>
    </main>
  );
}
