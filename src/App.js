import React from 'react';
import { Header } from './components/hero/header.component'
import { Main } from './pages/section-about/main.component'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
