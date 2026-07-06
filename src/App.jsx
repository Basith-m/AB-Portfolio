import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';

function App() {
  return (
    <div className="bg-surface min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;