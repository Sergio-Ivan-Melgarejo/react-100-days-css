import "./normalize.css"
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import 'bootstrap';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import MyProgress from "./pages/MyProgress";

function App() {
  return (
    <main className="App container-fluid container-xl px-0 overflow-hidden">
      <Router>
        <Nav />
        <div className="row align-items-center px-3 justify-content-center">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/abaout/" element={<About />} />
              <Route path="/how-to/" element={<Join />} />
              <Route path="/leaderboard/" element={<h2>/leaderboard/</h2>} />
              <Route path="/progress/" element={<MyProgress />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
