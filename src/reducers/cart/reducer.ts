import { ActionTypes } from "./actions"
import { produce } from 'immer'

export type coffeeType = {
  uri: string,
  price: number,
  name: string,
  amount: number
}

interface cartState {
  cartItems: coffeeType[]
}

export function cartReducer(state: cartState, action: any): cartState{
  const {cartItems} = state
  console.log("state: ", state)

  switch(action.type){
    case ActionTypes.ADD_COFFEE:
      const coffeeAlready = cartItems?.find(s => s.name == action.payload.name)

      if (coffeeAlready) {
        const idx = cartItems.findIndex(c=>c.name==coffeeAlready.name)
        const cart = produce(cartItems, draftState => {
          draftState[idx].amount = action.payload.amount
        }) 
        const cartStateItems = {
          cartItems: cart
        }
        const stateJSON = JSON.stringify(cartStateItems)
        localStorage.setItem('@coffee:state-1.0.0', stateJSON)

        return cartStateItems
        } else {
          const newCart = {
            cartItems: [...cartItems, action.payload]
          }
          const stateJSON = JSON.stringify(newCart)
          localStorage.setItem('@coffee:state-1.0.0', stateJSON)
          return  newCart
        }
       
  
    case ActionTypes.REMOVE_COFFEE:
      const newState = cartItems.filter(s => s.name !== action.payload.name)
      const newCart = {
        cartItems : newState
      }
      const stateJSON = JSON.stringify(newCart)
      localStorage.setItem('@coffee:state-1.0.0', stateJSON)
      return newCart
      
    default:
      return state
      }

}