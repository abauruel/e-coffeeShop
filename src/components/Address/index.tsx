import { AddressLabel, BairroCidadeUFWrapper, CEPContainer, Content, RuaComplementoContainer, RuaContainer } from "./styles";
import { MapPinLine } from 'phosphor-react'
export function Address() {
  return (
    <Content>
      <AddressLabel>
        <MapPinLine size={22} color={"#C47F17"} alt='' />
        <div>
          <span>Endereço de Entrega</span>
          <small>Informe o endereço onde deseja receber  seu pedido</small>
        </div>
      </AddressLabel>

      <CEPContainer>
        <input type="text" placeholder="CEP" />
      </CEPContainer>
      <RuaContainer>
        <input type="text" placeholder="Rua" />
      </RuaContainer>
      <RuaComplementoContainer>
        <div>
          <input type="text" placeholder="Número" />
        </div>
        <div>
          <input type="text" placeholder="Complemento" />
          <small>opcional</small>
        </div>
      </RuaComplementoContainer>
      <BairroCidadeUFWrapper>
        <div>
          <input type="text" placeholder="Bairro" />
        </div>


        <div>
          <input type="text" placeholder="Cidade" />
        </div>
        <div>
          <input type="text" min={2} max={2} placeholder="UF" />
        </div>


      </BairroCidadeUFWrapper>
    </Content >
  )
}