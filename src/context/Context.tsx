import { Children, ReactNode, createContext, useReducer, useState } from 'react'

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



export function ContextProvider({ children }: ContextProps) {

  const [cartItems, dispatch] = useReducer(
    (state: coffeeType[], action: any) => {

      if (action.type == 'ADD_COFFEE') {
        const coffeeAlready = state.find(s => s.name == action.payload.name)
        if (coffeeAlready) {
          const newState = state.filter(s => s.name !== coffeeAlready.name)
          newState.push(action.payload)
          return newState
        }

        return [...state, action.payload]
      }

      if (action.type == 'REMOVE_COFFEE') {
        const newState = state.filter(s => s.name !== action.payload.name)
        return newState
      }


      return state
    }, [])
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
    const stateJSON = JSON.stringify(item)
    localStorage.setItem('@coffee:state-1.0.0', stateJSON)
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