import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue.jsx";
import Red from "./components/Red.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="/blue">BLUE</Link>
          <Link to="/red">RED</Link>
          <Link to="/">HOME</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route
              path="/"
              element={
                <h1>
                  <Home />
                </h1>
              }
            />
            <Route
              path="/blue"
              element={
                <h1>
                  <Blue />
                </h1>
              }
            />
            <Route
              path="/red"
              element={
                <h1>
                  <Red />
                </h1>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
