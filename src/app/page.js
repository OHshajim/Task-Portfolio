import About from "@/Components/About";
import { Introduction } from "@/Components/Introduction";
import Nav from "@/Components/Nav";

export default function Home() {
  return (
    <main className="container mx-auto select-none">
      <Nav/>
      <Introduction/>
      <About/>
    </main>
  );
}
