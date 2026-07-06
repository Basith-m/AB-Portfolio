import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';

function App() {
  return (
    <div className="bg-surface min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Hero />
      </main>
    </div>
  );
}

export default App;