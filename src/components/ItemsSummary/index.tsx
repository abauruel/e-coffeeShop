import { useContext } from 'react'
import { AmountAndRemoveContainer, Divider, ItemCart, ItemsSummaryContainer, TotalPriceContainer } from './styles'
import { CartContext } from '../../context/Context'
import { Trash } from 'phosphor-react'

import { Minus, Plus } from 'phosphor-react'




export function ItemsSummary() {
  const { cartItems, handleRemoveCartItem, handleUpdateCartItems } = useContext(CartContext)

  async function handleMinusItem(item: any) {
    item.amount = item.amount - 1
    handleUpdateCartItems(item)
  }

  async function handleAddMoreItem(item: any) {
    item.amount = item.amount + 1
    handleUpdateCartItems(item)
  }

  const totalItens = cartItems.reduce((a, b) => {
    return (b.amount * b.price) + a
  }, 0)

  const shippingPrice = 3.50
  const total = Number(totalItens) + shippingPrice
  return (
    <ItemsSummaryContainer>
      <div>
        {cartItems.map(item => (
          <>
            <ItemCart key={item.name}>
              <div>
                <img src={item.uri} alt="" />
                <div>
                  <span>{item.name}</span>
                  <AmountAndRemoveContainer>
                    <div>
                      <button onClick={() => handleMinusItem(item)}>
                        <Minus size={14} color='#8047F8' />
                      </button>
                      <span>
                        {item.amount}
                      </span>
                      <button onClick={() => handleAddMoreItem(item)}>
                        <Plus size={14} color='#8047F8' />
                      </button>
                    </div>
                    <div>
                      <button onClick={() => handleRemoveCartItem(item)}>
                        <Trash size={14} color='#8047F8' />
                        <span>
                          remover
                        </span>
                      </button>

                    </div>
                  </AmountAndRemoveContainer>
                </div>
              </div>
              <span>R$ {(item.amount * item.price).toFixed(2)}</span>
            </ItemCart>
            <Divider />
          </>
        ))}

      </div>


      <TotalPriceContainer>
        <div> <span>Total de itens</span> <span>R$ {(totalItens).toFixed(2)}</span></div>
        <div> <span>Entrega</span> <span>R$ {(shippingPrice).toFixed(2)}</span></div>
        <div> <span>Total</span> <span>R$ {(total).toFixed(2)}</span></div>
      </TotalPriceContainer>

      <button>confirmar pedido</button>

    </ItemsSummaryContainer>
  )
}