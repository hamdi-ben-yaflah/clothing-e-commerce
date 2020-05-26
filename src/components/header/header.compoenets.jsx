import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils'; 
import { connect } from 'react-redux';
import  CartIcon  from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { 
    HeaderContainer, 
    OptionsContainer, 
    LogoContainer, 
    OptionLink
 } from "./header.style";

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>        
            <LogoContainer to="/">
                <Logo className="logo"/>
            </LogoContainer>
        
        <OptionsContainer>
            <OptionLink to="/shop">Shop</OptionLink>
            <OptionLink to="/contact">Contact</OptionLink>
            {
                currentUser ?
(                <OptionLink as = 'div' onClick={signOutStart}> SIGN OUT </OptionLink>
)                :
(                <OptionLink to='/signin'> SIGN IN</OptionLink>
)            }
        <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
}) 

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);