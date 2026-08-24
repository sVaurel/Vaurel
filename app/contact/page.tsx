import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a project, edit, design, or collaboration in mind? Get in touch with VAUREL.",
};

export default function ContactPage() {
  return (
    <main className="site-shell inner-page contact-page">
      <Nav active="contact" />

      <section className="inner-hero contact-hero">
        <p className="eyebrow">VAUREL / CONTACT</p>
        <h1>
          LET&apos;S
          <br />
          <span>CREATE.</span>
        </h1>
        <p>Have a project, edit, design, or collaboration in mind?</p>
        <a className="email-link" href="mailto:vaurelhq@gmail.com">
          vaurelhq@gmail.com ↗
        </a>
      </section>

      <Footer />
    </main>
  );
}
