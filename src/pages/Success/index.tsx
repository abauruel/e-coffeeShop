import { ContentSuccess, SuccessContent } from "./styles";
import DeliverySuccess from '../../assets/IllustrationDelivery.png'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/Context";
import { useNavigate } from 'react-router-dom'

export function Success() {
  const navigate = useNavigate()
  const { address, paymentMethod } = useContext(CartContext)

  useEffect(() => {
    if (Object.keys(address).length < 1) {
      navigate('/checkout')
    }
  }, [])
  return (
    <SuccessContent>
      {address && (
        <>
          <div>

            <h1>
              Uhu! Pedido confirmado
            </h1>
            <span>
              Agora é só aguardar que logo o café chegará até você
            </span>
            <div>
              <ContentSuccess colorCircle="#8047F8">
                <div>
                  < MapPin weight="fill" size={16} fill="#fff" />
                </div>
                <span>
                  {`Entrega em ${address.rua} ,${address.numero}  ${address.bairro} - ${address.cidade}, ${address.uf}`}
                </span>

              </ContentSuccess>
              <ContentSuccess colorCircle="#DBAC2C">
                <div>
                  < Timer weight="fill" size={16} fill="#fff" />
                </div>
                <span>
                  Previsão de entrega <br /> <strong>20 min - 30 min </strong>
                </span>

              </ContentSuccess>
              <ContentSuccess colorCircle="#C47F17">
                <div >
                  < CurrencyDollar weight="fill" size={16} fill="#fff" />
                </div>
                <span>
                  {`Pagamento na entrega`} <br /> <strong>{paymentMethod}</strong>
                </span>

              </ContentSuccess>
            </div>
          </div>
          <div>
            <img src={DeliverySuccess} alt="" />
          </div>
        </>
      )}
    </SuccessContent >
  )
}