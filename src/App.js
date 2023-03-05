import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import "../src/App.css"
import Home from "./pages/Home";
import Experience from './pages/Experience';
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/experience" element={<Experience/>}/>
          </Routes>
          <Footer/>
      </Router>
    </div>
  )
}

export default App
