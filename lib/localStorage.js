export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('Order');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }; 

// export default loadState
export const addItem = (state, action) =>{
  if(state.cart.has(action.cart.title)){
    const cartItem = state.cart.get(action.cart.title)
    const lot = state.cart.get(action.cart.title).lot
    state.cart.set(action.cart.title,{...cartItem, lot: lot+1});
  }
  else{
    state.cart.set(action.cart.title, { price: Number(action.cart.price),lot: 1});
  }
  localStorage.setItem("Order", JSON.stringify(state.cart))
  let cart = new Map(JSON.parse( localStorage.getItem("Order")))
  return cart
}

export const deleteItem = (state, action) =>{
  let cart = new Map(state.cart)
  cart.delete(action.title)
  localStorage.setItem("Order",JSON.stringify(cart))
  console.log(action.title + " удален(на) из списка")
  cart = new Map(JSON.parse(localStorage.getItem("Order")))
  return cart
}