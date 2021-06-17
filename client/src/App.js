import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import MainPage from './pages/main';
import ProductPage from './pages/product';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/product/:id" component={ProductPage} />
      </Switch>
    </Router>
  );
}
