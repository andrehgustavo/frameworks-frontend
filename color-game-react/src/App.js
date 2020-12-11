import React from 'react';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom'
import RouterView from './components/RouterView';

function App() {

  return (
    <BrowserRouter>
      <RouterView/>
    </BrowserRouter>
  )
}

export default App;