import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function Personal() {
  return <h2>Personal</h2>;
}

function Portfolio() {
  return <h2>Portfolio</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}

function Resume() {
  return <h2>Resume</h2>;
}

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundColor: "black",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          margin: 0,
          padding: 0,
        }}
      >
        <nav
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "0 0 50% 50%",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            width: "80%",
            margin: "0 auto",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-around",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link
                to="/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/personal"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Personal
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>

        <div
          style={{
            flex: 1,
            backgroundColor: "black",
            minHeight: "calc(100vh - 60px)",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
