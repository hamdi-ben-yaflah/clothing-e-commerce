export const addItemToCart = (cartItems, itemToAdd) => {
    const existItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

    if(existItem) {
        return cartItems.map(cartItem => 
            cartItem.id === itemToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, { ...itemToAdd, quantity: 1}];
}


export const decreaseItem = (cartItems, itemToRemove) => {
    const existItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id);

    if(existItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }

    return cartItems.map(cartItem => 
        cartItem.id === itemToRemove.id 
        ? { ...cartItem, quantity: cartItem.quantity -1 }
        : cartItem
    )

}