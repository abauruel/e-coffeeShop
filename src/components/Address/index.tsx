import { AddressLabel, BairroCidadeUFWrapper, CEPContainer, Content, RuaComplementoContainer, RuaContainer } from "./styles";
import { MapPinLine } from 'phosphor-react'
import { UseFormRegister, FieldValues } from 'react-hook-form'

type AddressType = {
  register: UseFormRegister<FieldValues>
}
export function Address({ register }: AddressType) {
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
        <input type="text" placeholder="CEP" {...register('cep')} />
      </CEPContainer>
      <RuaContainer>
        <input type="text" placeholder="Rua" {...register('rua')} />
      </RuaContainer>
      <RuaComplementoContainer>
        <div>
          <input type="text" placeholder="Número" {...register('numero')} />
        </div>
        <div>
          <input type="text" placeholder="Complemento" {...register('complemento')} />
          <small>opcional</small>
        </div>
      </RuaComplementoContainer>
      <BairroCidadeUFWrapper>
        <div>
          <input type="text" placeholder="Bairro"  {...register('bairro')} />
        </div>


        <div>
          <input type="text" placeholder="Cidade" {...register('cidade')} />
        </div>
        <div>
          <input type="text" min={2} max={2} placeholder="UF"  {...register('uf')} />
        </div>


      </BairroCidadeUFWrapper>
    </Content >
  )
}