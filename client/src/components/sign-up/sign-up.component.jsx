import React, {useState} from 'react';
import './sign-up.style.scss';
import InputForm from '../input-form/input-form.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignUp = ({signUpStart }) => {

    const [userCredantials, setUserCredantials] = useState({
        'displayName': '',
        'email': '',
        'password': '',
        'confirmPassword': ''
    })

    const { displayName, email, password, confirmPassword } = userCredantials;


    const handleSubmit = async event => {
        event.preventDefault();

        signUpStart({displayName, email, password})

        if (password !== confirmPassword) {
            alert('Passwords don\'t match');
            return;
        }

        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password);
        //     await createUserProfileDocument(user, {displayName})
        //     setState({
        //         'displayName': '',
        //         'email': '',
        //         'password': '',
        //         'confirmPassword': ''
        //     })
        // } catch (error) {
        //     console.log(error);
        // }
    }

    const  handleChange = event => {
        const { name, value } = event.target;

        setUserCredantials({...userCredantials, [name]: value });
    }

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <InputForm
                    type="text"
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                    />
                    <InputForm
                    type="email"
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                    />
                    <InputForm
                    type="password"
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                    />
                    <InputForm
                    type="password"
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                    />
                    <CustomButton type="submit"> Sign Up </CustomButton>
                </form>
            </div>
        )
    
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);