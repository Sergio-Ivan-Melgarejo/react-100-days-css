import "./normalize.css"
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import 'bootstrap';
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <main className="App container-fluid container-xl">
      <Nav />
      <div className="row align-items-center">
        <Router>

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/abaout/" element={<h2>1</h2>} />
              <Route path="/how-to/" element={<h2>2</h2>} />
              <Route path="/leaderboard/" element={<h2>2</h2>} />
              <Route path="/progress/" element={<h2>2</h2>} />
          </Routes>

        </Router>
      </div>
    </main>
  );
}

export default App;
