import { ShoppingCart } from "phosphor-react";
import { Container, ContainerCoffeePriceItem, ContainerIncrementAndDecrement, ContentCoffeeTypes } from "./styles";

import { Minus, Plus } from 'phosphor-react'
import { useContext, useState } from "react";
import { CartContext } from "../../context/Context";

type CoffeeItemProps = {
  uri: string,
  types: Array<string>,
  name: string,
  description: string,
  price: number
}

export function CoffeeItem({ uri, types, name, description, price }: CoffeeItemProps) {
  const [amount, setAmount] = useState(1)
  const { handleUpdateCartItems, cartItems } = useContext(CartContext)

  async function handleAddUnit() {
    setAmount(state => state + 1)
  }

  async function handleRemoveUnit() {
    if (amount - 1 > 0) {
      setAmount(state => state - 1)
    }
  }

  async function handleSendToCart() {
    const payload = {
      name,
      description,
      amount,
      price,
      uri
    }

    await handleUpdateCartItems(payload)
  }
  return (
    <Container>
      <img src={uri} alt="Imagem do tipo de café" />
      <ContentCoffeeTypes>
        {types?.map(t => (
          <span key={t}>
            <label>
              {t}
            </label>
          </span>
        ))}
      </ContentCoffeeTypes>

      <h3>{name}</h3>
      <p>{description}</p>
      <ContainerCoffeePriceItem>
        <small>R$</small>
        <span>{price.toFixed(2)}</span>
        <ContainerIncrementAndDecrement>
          <button onClick={handleRemoveUnit}>
            <Minus color="#8047F8" size={14} weight="fill" />
          </button>
          <span>{amount}</span>
          <button onClick={handleAddUnit}>
            <Plus color="#8047F8" size={14} weight="fill" />
          </button>
        </ContainerIncrementAndDecrement>
        <button onClick={handleSendToCart}>
          <ShoppingCart size={22} weight="fill" color="white" />
        </button>
      </ContainerCoffeePriceItem>
    </Container>
  )
}