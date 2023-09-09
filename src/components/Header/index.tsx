import { Wrapper } from './styles'
import Logo from '../../assets/LogoCoffeeDelivery.svg'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'
export function Header(props: any) {
  return (
    <Wrapper>
      <img src={Logo} />
      <div>
        <button>
          <MapPin size={22} color="#8047F8" weight='fill' />
          <span>Cidade name</span>
        </button>
        <button >
          <ShoppingCartSimple color="#C47F17" size={32} weight='fill' />
        </button>
      </div>
    </Wrapper>
  )
}