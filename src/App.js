import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import  Header  from './components/header/header.compoenets';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route  path='/signin' component={SignInAndSignUp}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
