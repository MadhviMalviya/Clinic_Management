import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/nav/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Doctors from './components/doctors/Doctors';
import About from './components/about/About';
import Registration from './components/form/Registration';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/login" element={<Registration />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
