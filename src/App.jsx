import { useState } from "react";
import "./App.css";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="navbar bg-base-100 border-b-2 border-cyan-500 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects">My Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>
          <Link
            className="btn btn-ghost text-xl bg-gradient-to-r from-orange-500 to-yellow-300 text-transparent bg-clip-text"
            to="/"
          >
            Kamran Tahir
          </Link>
        </div>
        <div className="navbar-start mr-44 hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className="text-base text-white transition duration-300 ease-in-out hover:text-cyan-500"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-base text-white transition duration-300 ease-in-out hover:text-cyan-500"
                to="/projects"
              >
                My Projects
              </Link>
            </li>
            <li>
              <Link
                className="text-base text-white transition duration-300 ease-in-out hover:text-cyan-500"
                to="/contact"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
