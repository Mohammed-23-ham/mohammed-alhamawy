import {
  Header,
  Scrollbar,
  Hero,
  Skills,
  Gallary,
  Contact,
  Footer,
} from "@/components/myComponents/index";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-250 w-full mx-auto">
        <Scrollbar />
        <Hero />
        <Skills />
        <Gallary />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
