// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import FinanceManager from './components/FinanceManager'
import Budgeting from './components/Budgeting'
import HouseholdAccount from './components/HouseholdAccount'
import ShoppingLists from './components/ShoppingLists'
import Calendar from './components/Calendar'
import News from './components/News';

// Importiere die anderen Komponenten hier

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/finance-manager">Einnahmen & Ausgaben</Link>
            </li>
            <li>
              <Link to="/Budgeting">Budget</Link>
            </li>
            <li>
              <Link to="/HouseholdAccount">Haushalts Konto</Link>
            </li>
            <li>
              <Link to="/ShoppingLists">Einkaufsliste</Link>
            </li>
            <li>
              <Link to="/Calendar">Kalender</Link>
            </li>
            <li>
              <Link to="/News">Neuigkeiten & Wichtiges</Link>
            </li>
            {/* Weitere Navigationslinks */}
          </ul>
        </nav>

        {/* Routen */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/finance-manager" element={<FinanceManager />} />
          <Route path="/Budgeting" element={<Budgeting />} />
          <Route path="/HouseholdAccount" element={<HouseholdAccount />} />
          <Route path="/ShoppingLists" element={<ShoppingLists />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/News" element={<News />} />
          {/* Weitere Routen */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
