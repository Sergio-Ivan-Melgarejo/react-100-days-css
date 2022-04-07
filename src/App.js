import "./normalize.css"
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import 'bootstrap';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import MyProgress from "./pages/MyProgress";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [data, setData] = useState(null)

useEffect(() => {
    fetch("/Data/DataDays.json")
    .then(res => res.json())
    .then(res => setData(res))

    // fetch("https://dog.ceo/api/breeds/image/random")
    // .then((response) => response.json())  
    // .then((dog) => console.log(dog))

  }, [])
  
  return (
    <main className="App container-fluid container-xl px-0 overflow-hidden">
      <Router>
        <Nav />
        <div className="row align-items-center px-3 justify-content-center">
          <Routes>
              <Route path="/" element={<Home days={data} />} />
              <Route path="/days/*" element={<Home days={data} />} >
                <Route path=":day" element={<Card />} />
              </Route>
              <Route path="/abaout/" element={<About />} />
              <Route path="/how-to/" element={<Join />} />
              <Route path="/leaderboard/" element={<h2>aun no disponible</h2>} />
              <Route path="/progress/" element={<MyProgress />} />
              <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
