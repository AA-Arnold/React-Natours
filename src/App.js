import React from 'react';
import { Header } from './components/hero/header.component'
import { Main } from './pages/section-about/main.component'
import { Features } from './pages/section-features/features'
import { Tours } from './pages/section-tours/tours'
import { Stories } from './pages/section-stories/stories'
import { Contact } from './pages/section-book/contant';
import { Footer } from './components/footer/footer';
import { Nav } from './components/nav/nav';

import './App.scss';
import './icons-css/icon-font.css'
import { PopUp } from './components/popup-component/popup-component';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <Features />
      <Tours />
      <Stories />
      <Contact />
      <Footer />
      <PopUp />
    </div>
  );
}

export default App;
