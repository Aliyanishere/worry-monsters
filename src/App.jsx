import './App.css';
import Navbar from './Components/navbar';
import Banner from './Components/banner';
import Slider from './Components/slider';
import About from './Components/About';
import Only_content from './Components/only_content';
import Roadmap from './Components/roadmap';
import Monsters from './Components/monsters';
import Team from './Components/team';
import Footer from './Components/footer';
import Contact from './Components/contact';

function App() {
  return (
    <div className="App">

      {/* nav */}
      <Navbar />

      {/* banner */}
      <Banner />

      {/* Slider */}
      <Slider />


      {/* About */}
      <About />

      {/* onlu_content */}
      <Only_content />


      {/* roadmap */}
      <Roadmap />

      {/* monsters */}
      <Monsters />

      {/* team */}
      <Team />

      {/* contact */}
      <Contact />

      {/* footer */}
      <Footer />

    </div>
  );
}

export default App;
