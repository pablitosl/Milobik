import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Productos from './components/productos/Productos';
import Nosotros from './components/nosotros/Nosotros';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/productos" component={Productos}/>
          <Route path="/nosotros" component={Nosotros}/>
          <Route path="*" component={() => <h1>404 Not Found</h1>}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
