import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

const HatPage = () => (
  <h1>Hat page</h1>
)

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
