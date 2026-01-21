import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';

import Home from "./pages/home";
import Page1 from './pages/page1';
import Page2 from './pages/page2';

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Link to="/">Inicio</Link >
        <Link to="/page1">Pagina 1</Link >
        <Link to="/page2/2">Pagina producto</Link >
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2/:param" element={<Page2 />} />
      </Routes>


    </>
  )
}

export default App
