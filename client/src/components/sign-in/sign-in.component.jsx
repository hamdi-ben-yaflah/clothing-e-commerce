import React, { useState } from 'react';
import './sign-in.style.scss';
import InputForm from '../input-form/input-form.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
 
    const [userCredentials, setUserCredentials] = useState({email: '', password: ''})
    const { email, password } = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();

        emailSignInStart(email, password)
    }

    const handleChange = e => {
        const { value, name } = e.target;
        setUserCredentials({...userCredentials, [name]: value });
    }


        return (
            <div className="signin">
                <h2>I already have an account</h2>
                <span>Sign in with your email and your password</span>
                <form onSubmit={handleSubmit}>
                    <InputForm 
                    type="email" 
                    name="email"
                    value={email} 
                    handleChange={ handleChange }
                    label="Email"
                    required/>
                    <InputForm 
                    type="password" 
                    name="password"
                    handleChange={ handleChange }
                    label="Password"
                    value={password} 
                    required/>
                    <div className='button'>
                        <CustomButton type="submit" >Sign In </CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >Sign In With Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})) 
})

export default connect(null, mapDispatchToProps)(SignIn);