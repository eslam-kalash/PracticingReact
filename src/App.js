import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CounterExample from './Components/CounterExample';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React eslam  test eslam
        </a>
      </header> */}

      <Header name="test eslam"></Header>

      <CounterExample />

      <Footer />
    </div>
  );
}

export default App;