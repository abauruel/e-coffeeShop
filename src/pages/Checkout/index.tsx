import { FormEvent, useContext } from "react";
import { Address } from "../../components/Address";
import { ItemsSummary } from "../../components/ItemsSummary";
import { PaymentMethod } from "../../components/PaymentMethod";
import { Content } from "./styles";

import { useForm, SubmitHandler } from 'react-hook-form'
import { CartContext, addressType } from "../../context/Context";

import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { setAddress, setPaymentMethod } = useContext(CartContext)

  const navigate = useNavigate()
  async function handleOnSubmit(event: any) {
    // event.preventDefault()
    if (event) {


      const addressFormData = {
        cep: event.cep,
        rua: event.rua,
        numero: event.numero,
        complemento: event?.numero,
        bairro: event.bairro,
        cidade: event.cidade,
        uf: event.uf,
      } as addressType

      setAddress(addressFormData)
      setPaymentMethod(event.paymentMethod)
      navigate('/success')

    }
  }
  return (
    <Content>
      <form onSubmit={handleSubmit(handleOnSubmit)}>

        <div>
          <h1>Complete seu pedido</h1>
          <Address register={register} />
          <PaymentMethod register={register} />
        </div>
        <div>
          <h1>Cafés selecionados</h1>
          <ItemsSummary />
        </div>
      </form>
    </Content>
  )
}