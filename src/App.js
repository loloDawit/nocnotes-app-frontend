import React from 'react';
import { Navbar } from 'react-bootstrap';
import './App.css';
import { Link } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">NOC-S3</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
