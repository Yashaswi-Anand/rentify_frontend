import React from 'react';
import Header from './header/header';
import './App.css';
import Home from './views/Home';

function App() {
  return (
    <div>
      <Header />
      <main className='main-container'>
        <Home/>
      </main>
    </div>
  );
}

export default App;
