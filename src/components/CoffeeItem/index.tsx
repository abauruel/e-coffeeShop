import { ShoppingCart } from "phosphor-react";
import { Container, ContainerCoffeePriceItem, ContainerIncrementAndDecrement, ContentCoffeeTypes } from "./styles";

import { Minus, Plus } from 'phosphor-react'

type CoffeeItemProps = {
  uri: string,
  types: Array<string>,
  name: string,
  description: string,
  price: number
}

export function CoffeeItem({ uri, types, name, description, price }: CoffeeItemProps) {
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
          <button>
            <Minus color="#8047F8" size={14} weight="fill" />
          </button>
          <span>1</span>
          <button>
            <Plus color="#8047F8" size={14} weight="fill" />
          </button>
        </ContainerIncrementAndDecrement>
        <button>
          <ShoppingCart size={22} weight="fill" color="white" />
        </button>
      </ContainerCoffeePriceItem>
    </Container>
  )
}