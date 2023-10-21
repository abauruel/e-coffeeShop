import { Address } from "../../components/Address";
import { ItemsSummary } from "../../components/ItemsSummary";
import { PaymentMethod } from "../../components/PaymentMethod";
import { Content } from "./styles";

export function Checkout() {
  return (
    <Content>

      <div>
        <h1>Complete seu pedido</h1>
        <Address />
        <PaymentMethod />
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <ItemsSummary />
      </div>
    </Content>
  )
}