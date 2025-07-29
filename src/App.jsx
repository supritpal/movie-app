import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Movie/Navbar";
import Homepage from "./Movie/Homepage";
import Favorites from "./Movie/Favorites";
import { Movieprovider } from "./Movie/Moviecontext";
import "./Moviecss/App.css";

function App() {
  return (
    <div className="app-container">
      <Movieprovider>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </Movieprovider>
    </div>
  );
}

export default App;
