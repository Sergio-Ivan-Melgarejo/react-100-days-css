import "./normalize.css"
import './App.css';
import { Route, Routes, HashRouter } from "react-router-dom";

import 'bootstrap';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import MyProgress from "./pages/MyProgress";
import Card from "./components/Card";
import ErrorPage from "./pages/ErrorPage";
import { useEffect, useState } from "react";
import ButtonDark from "./components/ButtonDark";
import Footer from "./components/Footer";
import { LanguageProvider } from "./Context/LanguageContext";
import ButtonLanguage from "./components/ButtonLanguage";

let getTheme= localStorage.getItem("theme");

function App() {
  const [theme, setTheme] = useState(getTheme || "light")

  // useEffect(() => {
  //   fetch("./Data/DataDays.json")
  //   .then(res => res.json())
  //   .then((res) => console.log({res}))

  //   // .then(res => res !== undefined ? setData(res) : null)

  //   // fetch("https://dog.ceo/api/breeds/image/random")
  //   // .then((response) => response.json())  
  //   // .then((dog) => console.log(dog))
  // }, [])

  useEffect(() => {
    theme === "dark" ?
    document.getElementsByTagName("body")[0].classList.add("dark")
    :
    document.getElementsByTagName("body")[0].classList.remove("dark")
  }, [theme])
  
  return (
    <main className="App container-fluid container-xl px-0 overflow-hidden">
      <LanguageProvider>
        <HashRouter>
          <Nav />
          <div className="row align-items-center px-3 justify-content-center">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/days/:num" element={<Home />} />
                  <Route path="/abaout/" element={<About />} />
                  <Route path="/how-to/" element={<Join />} />
                  <Route path="/leaderboard/" element={<h2>aun no disponible</h2>} />
                  <Route path="/progress/" element={<MyProgress />} />
                  <Route path="*" element={<ErrorPage/>} />
              </Routes>
          </div>
        </HashRouter>
        <Footer />
        <ButtonDark theme={theme} setTheme={setTheme} />
        <ButtonLanguage />
      </LanguageProvider>
    </main>
  );
}

export default App;
