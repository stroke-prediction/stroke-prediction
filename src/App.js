import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import PredictTool from './pages/PredictTool';
import PredictedResults from './pages/PredictedResults';
import Factors from './pages/Factors';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="predict-tool" element={<PredictTool />} />
        <Route path="predicted-result" element={<PredictedResults />} />
        <Route path="factors" element={<Factors />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user" element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
