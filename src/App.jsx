import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white selection:bg-sky-500/30">
      <Navbar />
      
      <main>
        <Hero/>
        <Skills/>
        <Projects/>
        <Contact />
      </main> 
      <Footer />
    </div>
  );
};

export default App;