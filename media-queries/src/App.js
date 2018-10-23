import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navback">
        <Nav />
        <Main />
        </div>
        <Services />
        <Portfolio />
        <About />
        
        
        
        
        {/* <div className='sticky'></div> */}
      </div>
    );
  }
}

export default App;
