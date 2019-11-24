import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {loadState,addItem,deleteItem} from './lib/localStorage'


const initialState = {
  cart : new Map(loadState())
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case "ADDTOCARTITEM":
      let cart = addItem(state, action)
      return {
        ...state,
        cart: cart
      }
    
    case "DELETEITEM":
      cart = deleteItem(state,action)
      return {
        ...state,
        cart: cart
      }
      
    default:
      return {
      ...initialState,
      }
  }
}



export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('Order', serializedState);
  } catch {

  }
};