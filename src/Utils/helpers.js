export const addCartItem = (cartItems, productId) => {
  //                        if the product already exists in the cart
  const existingCartItemIndex = cartItems.findIndex(
    (item) => item.productId === productId
  );

  if (existingCartItemIndex !== -1) {
    //                      this "..." makes a copy of our existing cart
    const updatedCart = [...cartItems];
    //                       update the quantity
    updatedCart[existingCartItemIndex].quantity += 1;
    return updatedCart;
  } else {
    //                      if the new product is not in the cart
    //                      add it with the quantity
    const newItem = { productId, quantity: 1 };
    //                      return cartitems and newItems
    //                      "..." means spread it or copy
    return [...cartItems, newItem];
  }
};
