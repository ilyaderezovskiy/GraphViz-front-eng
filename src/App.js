import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';  // ← Изменение здесь
import VisualizationPage from "./pages/VisualizationPage";

export default function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<VisualizationPage/>} />
        </Routes>
    </Router>
    </>
  );
}