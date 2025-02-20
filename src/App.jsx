import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './component/hero'; 
import About from './component/About';

function App() {
    return (
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
    );
}

export default App;
