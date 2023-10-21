import styled from 'styled-components'


export const ItemsSummaryContainer = styled.div`
background: #F3F2F2;
padding: 40px;
margin-top: 15px;
margin-bottom: 12px;
border-radius: 6px 44px;
button {
  border: none;
  cursor: pointer;
}


> button {
  width: 100%;
  background: #DBAC2C;
  color: #fff;
  border-radius: 6px;
  text-transform:  uppercase;
  font-size: 14px;
  line-height: 160%;
  height: 46px;
  border: none;
  cursor: pointer;
}
`

export const TotalPriceContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 12px;
& div {
  display: inherit;
  flex-direction: row;
  margin-bottom: 12px;
  align-items: center;
  justify-content: space-between;
  color: #574F4D;
  font-size: 14px;
  line-height: 130%;

}
& div:last-child{
  color: #403937;
  font-size: 20px;
  line-height: 130%;
  font-weight: bold;
}

`

export const Divider = styled.div`
width: 100%;
border: 1px solid #E6E5E5;
margin: 12px 0;
`

export const ItemCart = styled.div`
display: flex;
flex-direction: row;
margin: 24px 0%; 
justify-content: space-between;
align-items: start;
> div {
  display: flex;
  flex-direction: row;
  img{
  height: 64px;
  width: 64px;
  margin-right: 20px;
  div {
    display: flex;
    flex-direction: column;
    border: 1px solid red;
  }
}}
`

export const AmountAndRemoveContainer = styled.div`
display:  flex;
flex-direction: row;
margin-top: 8px;
color: #574F4D;
& div:nth-child(1){
  background: #E6E5E5;
  border-radius: 6px; 
  padding: 3.5px;
 
  > button{
    background: inherit;
    width: auto;
    height: auto;
    padding: 3.5px;
    align-items: center;
    justify-content: center;
  }
 > span {
  width: auto;
  height: 21px;
 }
}
& div:last-child{
  background: #E6E5E5;
  border-radius: 6px; 
  padding: 3.5px;
  display: inherit;
  align-items: center;
  margin-left: 8px;


  
  > button {
    height: auto;
    width: auto;
    background: inherit;
    text-transform: uppercase;
    display: inherit;
  align-items: center;
  font-size: 12px;
  line-height: 160%;
    > svg {
    margin-right: 4px;
  }
  > span{
    margin-right: 4px;
  }
  }
  
 }
`