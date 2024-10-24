import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import Skills from "../components/Skills";

function Home() {
  return (
    <>
      <main className="bg-secondy  ">
        <Navbar />
        <Hero />
        <AboutMe />
      </main>
    </>
  );
}

export default Home;
