import React, {useEffect} from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { GlobalStyle } from './global.styles'
import ShopPage from './pages/shop/shop.component';
import  CheckoutPage  from "./pages/checkout/checkout.component";
import HomePage from './pages/homepage/homepage.component'

import  Header  from './components/header/header.compoenets';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = ({currentUser , checkUserSession}) =>  {
   
  //unsubscribeFromAuth = null;
  
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  // componentDidMount() {
  //   const {checkUserSession} = this.props;
  //   checkUserSession();

  //   // this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
  //   //   //this.setState({ currentUser: user});
      
  //   //   if(userAuth) {
  //   //     const userRef = await createUserProfileDocument(userAuth);
 
  //   //     userRef.onSnapshot(snapShot => {
  //   //       setCurrentUser({
  //   //         id: snapShot.id,
  //   //         ...snapShot.data()
  //   //       })
  //   //     });
  //   //   } else {
  //   //     setCurrentUser( userAuth );
  //   //   }
  //   //   // Data to Firebase
  //   //   // addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })))

  //   // })
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }


    return (
      <div>
        <GlobalStyle/>
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route  path='/checkout' component={CheckoutPage}/>
          <Route  exact path='/signin' render = {() => 
            currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUp />
            )
          }/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
