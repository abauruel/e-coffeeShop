import { Children, ReactNode, createContext, useReducer, useState } from 'react'
import { cartReducer, coffeeType as cartItemsType } from '../reducers/cart/reducer'

type cartContextType = {
  coffees?: [coffeeType],
  setCartItems?: () => void
  cartItems: coffeeType[]
  handleUpdateCartItems: (item: payloadType) => void
  handleRemoveCartItem: (item: payloadType) => void

  address: addressType
  setAddress: (address: addressType) => void

  paymentMethod: string
  setPaymentMethod: (method: string) => void

}

export type addressType = {
  cep: string,
  rua: string,
  numero: number,
  complemento?: string,
  bairro: string,
  cidade: string,
  uf: string,
}
type coffeeType = {
  uri: string,
  price: number,
  name: string,
  amount: number
}
type ContextProps = {
  children: ReactNode
}

type payloadType = {
  name: string,
  uri: string,
  price: number,
  amount: number,

}


export const CartContext = createContext({} as cartContextType)


function createInitialState() {
  const initialState = [] as any[]


}


export function ContextProvider({ children }: ContextProps) {


  const [cartState, dispatch] = useReducer(
    cartReducer, { cartItems: [] }, (initialState) => {
      const storedStateAsJson = localStorage.getItem('@coffee:state-1.0.0')
      console.log('stored: ', storedStateAsJson)
      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }

      return initialState
    })

  const { cartItems } = cartState
  const [address, setAddress] = useState<addressType>({} as addressType)
  const [paymentMethod, setPaymentMethod] = useState('')

  async function handleUpdateCartItems(item: payloadType) {

    const stateJSON = JSON.stringify(item)
    localStorage.setItem('@coffee:state-1.0.0', stateJSON)
    dispatch({
      type: 'ADD_COFFEE',
      payload: item
    })
  }

  async function handleRemoveCartItem(item: payloadType) {
    dispatch({
      type: 'REMOVE_COFFEE',
      payload: item
    })
  }



  return (
    <CartContext.Provider value={{
      cartItems,
      handleUpdateCartItems,
      handleRemoveCartItem,
      address, setAddress,
      paymentMethod, setPaymentMethod
    }}>
      {children}
    </CartContext.Provider>
  )
}