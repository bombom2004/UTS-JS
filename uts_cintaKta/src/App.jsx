import React from 'react';
import Header from "./components/Header";
import Slide from "./components/Slide";
import Card from "./components/Card";
import Consultation from "./components/Konsultasi"; // Adjust if using "Konsultasi.jsx"
import Footer from "./components/Footer";
import './assets/card.css'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Slide />
      <section className="container">
        <h2>Perusahaan yang Telah Bergabung</h2>
        <p>Rhoncus morbi et augue nec, in id ullamcorper et sit...</p>
        <div className="cards">
          <Card title="Happy Clients" value="250" />
          <Card title="Completed Projects" value="600" />
          <Card title="Available Resources" value="1.8k" />
          <Card title="Subscribers" value="11k" />
        </div>
      </section>
      <Consultation />
      <Footer />
    </div>
  );
};

export default App;
