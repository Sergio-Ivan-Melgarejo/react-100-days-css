import "./normalize.css"
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import 'bootstrap';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <main className="App container-fluid container-xl">
      <Router>
        <Nav />
        <div className="row align-items-center">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/abaout/" element={<About />} />
              <Route path="/how-to/" element={<h2>/how-to/</h2>} />
              <Route path="/leaderboard/" element={<h2>/leaderboard/</h2>} />
              <Route path="/progress/" element={<h2>/progress/</h2>} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
