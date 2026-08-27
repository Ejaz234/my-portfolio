import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GithubActivity from "./components/GithubActivity";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <div className="rail">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <GithubActivity />
      <Footer />
      </div>
    </>
  );
}
