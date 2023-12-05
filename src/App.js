import './App.css';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Drivers from './components/Drivers';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Sales from './components/Sales';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Catalog />
      <Info />
      <Drivers />
      <Sales />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
