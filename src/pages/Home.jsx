import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MyProject from "../components/MyProject";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

function Home() {
  return (
    <>
      <main id="home" className="bg-secondy relative ">
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <MyProject />
        <ContactMe />
        <Footer/>
      </main>
    </>
  );
}

export default Home;
