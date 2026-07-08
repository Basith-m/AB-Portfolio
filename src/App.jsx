import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="bg-surface min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

export default App;