// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import UserProvider from './contexts/UserProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styling
import './index.css';

// Layout
import Layout from './layout/Layout';

// Pages
import Entrance from './pages/Entrance';
import Dashboard from './pages/Dashboard';
import History from './pages/History';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Entrance/>}/>
        <Route path="/app" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="/app/history" element={<History/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);