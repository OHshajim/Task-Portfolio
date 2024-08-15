import About from "@/Components/About";
import Footer from "@/Components/Footer";
import Introduction from "@/Components/Introduction";
import Nav from "@/Components/Nav";
import Projects from "@/Components/Projects";
import Service from "@/Components/Service";
import Testimonial from "@/Components/Testimonial";

export default function Home() {
  return (
    <main className="container mx-auto select-none flex flex-col gap-20">
      <Nav />
      <Introduction />
      <About />
      <Service />
      <Projects/>
      <Testimonial />
      <Footer />
    </main>
  );
}
