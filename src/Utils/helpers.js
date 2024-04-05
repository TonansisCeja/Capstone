export const addCartItem = (cartItems, productId) => {
  console.log(cartItems, productId, "cart, and id");
  //                        if the product already exists in the cart
  const existingCartItemIndex = cartItems.findIndex(
    (item) => item.productId === productId
  );

  if (existingCartItemIndex !== -1) {
    //                      this "..." makes a copy of our existing cart
    const updatedCart = [...cartItems];
    console.log(existingCartItemIndex, "existing cart iem index");
    //                       update the quantity
    updatedCart[existingCartItemIndex].quantity += 1;
    return updatedCart;
  } else {
    console.log("did not find");
    //                      if the new product is not in the cart
    //                      add it with the quantity
    const newItem = { productId, quantity: 1 };
    //                      return cartitems and newItems
    //                       means spread it or copy
    return [...cartItems, newItem];
  }
};

export const removeCartItem = (cartItems, productId) => {
  //               Check if the product already exists in the cart
  const existingCartItemIndex = cartItems.findIndex(
    (cartItems) => cartItems.productId === productId
  );

  //                if the product already exist and the item.quantity
  //                 is greater than 1 decrement the quantity

  if (
    existingCartItemIndex !== -1 &&
    cartItems[existingCartItemIndex].quantity > 1
  ) {
    const updatedCart = cartItems.map((item) => {
      //           if locate the product with the matching id --
      //           it's in our cart
      if (item.productId === productId) {
        // update and decrease the quantity by 1
        return { ...item, quantity: item.quantity - 1 };
      } else {
        //         otherwise if there's no matching id just
        //         return that cart item
        return item;
      }
    });

    return updatedCart.filter((item) => item.quantity !== 0);
  } else if (
    //      if the product exist, but the quantity
    //      is 1 already we need to remove it

    existingCartItemIndex !== -1 &&
    cartItems[existingCartItemIndex].quantity === 1
  ) {
    const updateCart = cartItems.filter((item) => {
      return item.productId !== productId;
    });
    return updateCart;
  } else {
    // do nothing
    return;
  }
};

export const editCartItemQuantity = (cartItems, productId, newQuantity) => {
  //          find the index of the item in the cart
  //           check if the item exist in the cart

  const existingCartItemIndex = cartItems.findIndex((item) => {
    return item.productId === productId;
  });
  //                 if the product exists in the cart
  if (existingCartItemIndex !== -1) {
    //                 create a copy of our cart array
    const updateCart = [...cartItems];
    //        then update that items quantity to the new quantity
    updateCart[existingCartItemIndex].quantity = newQuantity;
    return updateCart;
  } else {
    //     if the product/item is not in the cart. Return the
    //     cart unchanged.
    return cartItems;
  }
};
