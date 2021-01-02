import React from 'react';
import Header from './components/Header';
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Card3 from './components/Card3'
import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <Section1/>
    <Banner/>
    <Section2/>
    {/* <Card3/> */}
    <Footer/>
    </div>
  );
}

export default App;
