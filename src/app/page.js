import About from "@/Components/About";
import { Introduction } from "@/Components/Introduction";
import Nav from "@/Components/Nav";

export default function Home() {
  return (
    <main className="container mx-auto select-none flex flex-col gap-10">
      <Nav/>
      <Introduction/>
      <About/>
    </main>
  );
}
