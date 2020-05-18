import React from 'react';
import { ButtonContainer } from "./custom-button";

const CustomButton = ({children, ...props}) => (
    <ButtonContainer
     {...props} >
        { children }
    </ButtonContainer>
)

export default CustomButton;