import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './components/signup';
import Login from './components/login';
import Dash from './components/dashboard';
import Gallery from './components/gallery';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Home />
      <Routes>
        <Route path="/dashboard" element={<Dash />} /> 
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
