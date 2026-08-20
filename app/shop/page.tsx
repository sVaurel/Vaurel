import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="site-shell inner-page shop-page">
      <header className="nav">
        <nav className="nav-left" aria-label="Primary navigation">
          <Link href="/">HOME</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link className="active-link" href="/shop">SHOP</Link>
        </nav>
        <Link className="nav-contact" href="/contact">GET IN TOUCH</Link>
      </header>

      <section className="inner-hero">
        <p className="eyebrow">VAUREL / SHOP</p>
        <h1>COMING<br /><span>SOON.</span></h1>
        <p>Digital products, presets, assets, and other VAUREL releases will live here.</p>
      </section>

      <footer>
        <span>© 2026 VAUREL</span>
        <span>CREATIVE VIDEO EDITING</span>
      </footer>
    </main>
  );
}
