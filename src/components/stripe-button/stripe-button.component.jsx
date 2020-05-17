import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


function StripeCheckoutButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Mt5vxcPLigDRQm1j4yCxeZiu00Y9iGff9V';
    
    const onToken = token => {
    console.log(" -> token", token);
    alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name= "Clothing E-commerce"
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
            
        
    );
}

export default StripeCheckoutButton;