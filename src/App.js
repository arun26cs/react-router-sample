import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import about from './components/about';
import home from './components/home';
import Contact from './components/contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path='/' exact component={home}/>
        <Route path='/about' component={about}/>
        <Route path='/contact' component={Contact}/>
      </div>
    </BrowserRouter>

  );
}

export default App;
