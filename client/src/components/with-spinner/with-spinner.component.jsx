import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

import React from 'react';

export const WithSpinner = WrappedComponent  => {

    const Spinner = ({ isLoding, ...otherProps}) => {
        return isLoding ? (
                <SpinnerOverlay>
                    <SpinnerContainer />
                </SpinnerOverlay>
            ) : (
                <WrappedComponent {...otherProps} />
            );
    }; 

    return Spinner;
}

export default WithSpinner;