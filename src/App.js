import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./common/Footer";
import Header from "./common/Header";
import LandingPage from "./landingpage/components/LandingPage";


function App() {
  return (
    <div>
      <Header />
      <LandingPage/>
      <Footer />
    </div>
  );
}

export default App;
