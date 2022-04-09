import "./normalize.css"
import './App.css';
import { Route, BrowserRouter as Router, Routes, HashRouter } from "react-router-dom";

import 'bootstrap';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import MyProgress from "./pages/MyProgress";
import Card from "./components/Card";
import ErrorPage from "./pages/ErrorPage";

const jsonData = require('./Data/DataDays.json'); 

function App() {

  // useEffect(() => {
  //   fetch("./Data/DataDays.json")
  //   .then(res => res.json())
  //   .then((res) => console.log({res}))

  //   // .then(res => res !== undefined ? setData(res) : null)

  //   // fetch("https://dog.ceo/api/breeds/image/random")
  //   // .then((response) => response.json())  
  //   // .then((dog) => console.log(dog))
  // }, [])
  
  return (
    <main className="App container-fluid container-xl px-0 overflow-hidden">
      <HashRouter>
        <Nav />
        <div className="row align-items-center px-3 justify-content-center">
          <Routes>
              <Route path="/" element={<Home jsonData={jsonData} />} />
              <Route path="/days/*" element={<Home jsonData={jsonData} />} >
                <Route path=":day" element={<Card jsonData={jsonData} />} />
              </Route>
              <Route path="/abaout/" element={<About />} />
              <Route path="/how-to/" element={<Join />} />
              <Route path="/leaderboard/" element={<h2>aun no disponible</h2>} />
              <Route path="/progress/" element={<MyProgress jsonData={jsonData} />} />
              <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </div>
      </HashRouter>
    </main>
  );
}

export default App;
