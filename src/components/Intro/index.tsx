import { CircleBackground, Content, Items, Title } from "./styles";
import CoffeeImage from '../../assets/CoffeeBackground.png'
import { ShoppingCart } from "phosphor-react";

export function Intro() {
  return (
    <Content>
      <Title>
        <div>
          <span>Encontre o café perfeito para qualquer hora do dia</span>
          <small>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</small>
        </div>
        <div>
          <Items>
            <div>
              <CircleBackground size={32} backgroundColor="#C47F17" >
                <ShoppingCart size={13} color="white" weight="fill" />
              </CircleBackground>
              <label>Compra simples e segura</label>
            </div>
            <div>
              <CircleBackground size={32} backgroundColor="#DBAC2C" >
                <ShoppingCart size={13} color="white" weight="fill" />
              </CircleBackground>
              Entrega rápida e rastreada
            </div>

            <div>
              <CircleBackground size={32} backgroundColor="#574F4D" >
                <ShoppingCart size={13} color="white" weight="fill" />
              </CircleBackground>
              Embalagem mantém o café intacto
            </div>
            <div>
              <CircleBackground size={32} backgroundColor="#8047F8" >
                <ShoppingCart size={13} color="white" weight="fill" />
              </CircleBackground>
              O café chega fresquinho até você
            </div>
          </Items>
        </div>
      </Title>
      <div>
        <img src={CoffeeImage} alt="logo coffee delivery" height='360' width='476' />
      </div>
    </Content>
  )
}