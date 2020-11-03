import React from 'react';
import { Header } from './components/hero/header.component'
import { Main } from './pages/section-about/main.component'
import { Features } from './pages/section-features/features'
import './App.scss';
import './icons-css/icon-font.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Features />
    </div>
  );
}

export default App;
