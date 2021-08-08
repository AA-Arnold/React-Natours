import React from 'react';
import { Header } from './components/hero/header.component'
import { Main } from './pages/section-about/main.component'
import { Features } from './pages/section-features/features'
import { Tours } from './pages/section-tours/tours'
import { Stories } from './pages/section-stories/stories'
import './App.scss';
import './icons-css/icon-font.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Features />
      <Tours />
      <Stories />
    </div>
  );
}

export default App;
