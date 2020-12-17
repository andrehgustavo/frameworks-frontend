import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Link } from 'react-router-dom'
import RouterView from './components/RouterView';

function App() {

  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <RouterView/>
    </BrowserRouter>
  )
}

export default App;