import styled  from 'styled-components'

export const Content = styled.div`
background: #F3F2F2;
padding: 40px;
margin-top: 15px;
margin-bottom: 12px;
border-radius: 6px;

`

export const Title = styled.div`
display: flex;
flex-direction: row;
font-size: 16px;
font-family: 'Roboto';
color: #403937;


> div {
  margin-left: 8px;
  display: flex;
  flex-direction:  column;
  margin-bottom: 16px;
 


  small {
    color: #574F4D;
    font-size: 14px;
  }
}
`

export const PaymentMethodType = styled.label`
display: flex;
flex-direction: row;
align-items: center;
/* justify-content: center; */
background: #EDEDED;
cursor: pointer;
/* margin: 17.5px 16px; */
/* height: 50px; */
border-radius: 6px;
padding: 12px;
> svg {
  margin-right: 12px;
}
> span {
  font-size: 12px;
  line-height: 160%;
  text-transform: uppercase ;
}

`
export const PaymentMethodTypeContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 12px;

input {
  
  display: none;
  &:checked + ${PaymentMethodType} {
    border: 1px solid #8047F8;
    background: #EBE5F9;
  }
  
}

`

