import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="bg-surface min-h-screen">
      <Navbar />
      
      <main>
        <section id="hero" className="h-screen flex items-center justify-center">
          <h1 className="text-white text-4xl">Hero Section Placeholder</h1>
        </section>
        
        <section id="about" className="h-screen flex items-center justify-center bg-surface-variant">
          <h1 className="text-white text-4xl">About Section Placeholder</h1>
        </section>
      </main>
    </div>
  );
}

export default App;