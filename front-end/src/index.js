// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/exterior/Login';

// Styling
import './index.css';

// User-Defined Components
import LayoutApp from './layouts/LayoutApp';
import LayoutMain from './layouts/LayoutMain';

import Home from './pages/exterior/Home'
import Dashboard from './pages/interior/Dashboard';

import History from './pages/interior/History';

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

        <Route path="/app" element={<LayoutApp />}>
          <Route index element={<Dashboard/>}/>
          <Route path="/app/history" element={<History/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);