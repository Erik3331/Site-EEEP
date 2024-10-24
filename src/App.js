import React from 'react';
import Header from './components/Header';
import Carrossel from './components/Carrossel';
import Section from './components/Section';
import Footer from './components/Footer';
import "./App.css"
import { Routes } from "./Routes"


function App() {
  return (
    <div className="App">
      <div className="imagemPrincipal">
      </div>
      <Header />
      <Carrossel />
      <main className="Main">
        <Section 
          titulo="Titulo" 
        />
      </main>
      <Footer/>
      <Routes />
    </div>
  );
}

export default App;
