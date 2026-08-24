import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="site-shell home-page">
      <Nav active="home" />

      <section className="home-image-full" aria-label="VAUREL YouTube channel">
        <Image
          src="/vaurel-youtube.png"
          alt="VAUREL YouTube channel"
          width={607}
          height={230}
          sizes="100vw"
          priority
          className="home-image-full-img"
        />
      </section>

      <Footer />
    </main>
  );
}
