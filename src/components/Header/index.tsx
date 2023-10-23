import { Wrapper } from './styles'
import Logo from '../../assets/LogoCoffeeDelivery.svg'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../context/Context'
import { Link } from 'react-router-dom'
// import { Context } from '../../context/Context'
export function Header(props: any) {
  const { cartItems } = useContext(CartContext)
  return (
    <Wrapper>
      <Link to='/'>
        <img src={Logo} />
      </Link>
      <div>
        <button>
          <MapPin size={22} color="#8047F8" weight='fill' />
          <span
          >Cidade name</span>
        </button>
        <Link to={'/checkout'}>
          <ShoppingCartSimple color="#C47F17" size={32} weight='fill'
          />
          {cartItems?.length > 0 &&

            <span>{cartItems.length}</span>
          }
        </Link>

      </div>
    </Wrapper>
  )
}