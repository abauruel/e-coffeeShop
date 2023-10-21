import { Content, PaymentMethodType, PaymentMethodTypeContainer, Title } from "./styles";
import { CurrencyDollar } from 'phosphor-react'
import { CreditCard, Bank, Money } from 'phosphor-react'
export function PaymentMethod() {
  const paymentMethods = [
    { name: 'cartão de crédito', svg: <CreditCard size={16} color={"#8047F8"} /> },
    { name: 'cartão de débito', svg: <Bank size={16} color={"#8047F8"} /> },
    { name: 'dinheiro', svg: <Money size={16} color={"#8047F8"} /> },
  ]
  return (
    <Content>
      <Title>
        <CurrencyDollar size={22} color={"#8047F8"} alt='' />
        <div>
          <span>Pagamento</span>
          <small>O pagamento é feito na entrega. Escolha a forma que deseja pagar</small>
        </div>
      </Title>

      <PaymentMethodTypeContainer>
        {paymentMethods.map(item => (
          <div key={item.name}>

            <input type="radio" id={item.name} name='paymentMethod' />
            <PaymentMethodType htmlFor={item.name}>
              {item.svg}
              <span>{item.name}</span>

            </PaymentMethodType>
          </div>
        ))}
      </PaymentMethodTypeContainer>
    </Content>
  )
}