// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/exterior/Login';

// Styling
import './index.css';

// User-Defined Components
import LayoutMain from './layouts/LayoutMain';
import Home from './pages/exterior/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />}/>
          <Route path="/about" element={<Home />}/>
          <Route path="/privacy" element={<Home />}/>
          <Route path="/faq" element={<Home />}/>
        </Route>

        <Route path="/login" element={<Login />}/>

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);