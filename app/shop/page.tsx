import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shop",
  description: "Digital products, presets, assets, and other VAUREL releases — coming soon.",
};

export default function ShopPage() {
  return (
    <main className="site-shell inner-page shop-page">
      <Nav active="shop" />

      <section className="inner-hero">
        <p className="eyebrow">VAUREL / SHOP</p>
        <h1>
          COMING
          <br />
          <span>SOON.</span>
        </h1>
        <p>Digital products, presets, assets, and other VAUREL releases will live here.</p>
      </section>

      <Footer />
    </main>
  );
}
