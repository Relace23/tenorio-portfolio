// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import Hero from './component/Hero';
import Blog from './component/Blog';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Contact from './component/Contact';
import './App.css';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Hero />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>
                </motion.div>
            </div>
        </BrowserRouter>
    );
}

export default App;
