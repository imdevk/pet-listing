import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PetDetailsPage from './pages/PetDetailsPage';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col w-screen">
          <nav className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold hover:text-blue-100 transition-colors">🐾 Pet Finder</Link>
              <Link to="/" className="hover:text-blue-100 transition-colors">Home</Link>
            </div>
          </nav>
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pet/:id" element={<PetDetailsPage />} />
            </Routes>
          </main>
          <footer className="bg-gray-800 text-white text-center p-4">
            <p>&copy; 2024 Pet Finder. All rights reserved.</p>
          </footer>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;