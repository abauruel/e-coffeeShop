import styled from 'styled-components'


export const Content = styled.div`
background: #F3F2F2;
padding: 40px;
margin-top: 15px;
margin-bottom: 12px;
border-radius: 6px;
`
 const baseContainer = styled.div`
margin-top: 16px;
margin-bottom: 16px;
background: #EDEDED;
border-radius: 4px;
input {
  margin: 12px;
  border: none;
  background:  transparent;
  font-size: 16px;
  color: #8D8686;
}
`


export const AddressLabel = styled.div`
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

export const CEPContainer = styled.div`
width: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
margin-top: 16px;
margin-bottom: 16px;
background: #EDEDED;
border-radius: 4px;
input {
  margin: 12px;
  border: none;
  background:  transparent;
  font-size: 16px;
  color: #8D8686;
}
`
export const RuaContainer = styled(CEPContainer)`
width: 100%;
input{
  width: 90%;
}
`

export const RuaComplementoContainer = styled(baseContainer)`
display:  flex;
flex-direction: row;
align-items: center;
width: 100%;
background: none ;
 & div:nth-child(1){
    width: 200px;
    background:#EDEDED;
    margin-right:12px ;
 }
 & div:nth-child(2){
  background:#EDEDED;
  width: 100%;
  display: flex;
  flex-direction:row ;
  align-items: center;
  justify-content: space-between;
 
  small{
    font-size: 12px;
    font-style: italic;
    padding-right: 12px;
  }
 }

`

export const BairroCidadeUFWrapper = styled(baseContainer)`
display: flex;
flex-direction: row;
gap: 12px;
background: transparent;
margin: auto;
& div{
  background:#EDEDED;
  :nth-child(2){
    width: 100%;
  }

  :last-child{
  width: 60px;
 
 }
 }
 


`