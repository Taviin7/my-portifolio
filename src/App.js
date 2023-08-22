import './App.css';
import Home from './Components/Home/Home';
import Projetos from './Components/Projetos/Projetos';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Projetos />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
