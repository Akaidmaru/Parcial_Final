import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home.jsx' //src\Routes\Home.jsx
import Favs from './Routes/Favs.jsx' //src\Routes\Favs.jsx
import Form from './Components/Form'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/contact" element={<Form />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
