import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './ui/Header';
import Home from './components/Home';

function App() {
  return (
    <div  >
      <header>
        <Header />
        <Home />
      </header>
    </div>
  );
}

export default App;
