import Link from "next/link";

type NavProps = {
  active?: "home" | "projects" | "shop" | "contact";
};

export default function Nav({ active }: NavProps) {
  return (
    <header className="nav">
      <nav className="nav-left" aria-label="Primary navigation">
        <Link href="/" className={active === "home" ? "active-link" : undefined}>
          HOME
        </Link>
        <Link href="/projects" className={active === "projects" ? "active-link" : undefined}>
          PROJECTS
        </Link>
        <Link href="/shop" className={active === "shop" ? "active-link" : undefined}>
          SHOP
        </Link>
      </nav>
      <Link
        href="/contact"
        className={active === "contact" ? "nav-contact active-link" : "nav-contact"}
      >
        GET IN TOUCH
      </Link>
    </header>
  );
}
