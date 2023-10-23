import styled from 'styled-components'

export const Container = styled.div`
width: 256px;
height: 310px;
border-radius: 6px 36px 6px 36px;
background-color: ${props => props.theme.colors.card};
margin-top: 54px;
margin-inline: 32px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
>img{
  margin-top: -90px;
}

h3 {
  margin-top: 16px;
}
p {
  font-size: ${props => props.theme.sizes.text.s};
  color: ${props => props.theme.colors.label};
  margin-top: 8px;
  margin-inline: 8px;
  text-align: center;
}

button{
  border: none;
  background: ${props => props.theme.colors.purpleDark} ;
  height: 38px;
  width: 38px;
  border-radius: 6px;
  margin-left: 8px;
  }

`

export const ContentCoffeeTypes = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 12px;
 > span {
  margin: 4px;
  background-color: ${props => props.theme.colors.yellowLight};
  color: ${props => props.theme.colors.yellowDark};
  
  padding: 4px 8px 4px 8px;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 10px ;
  
}
`

export const ContainerCoffeePriceItem = styled.div`
margin-inline: 24px;
margin-top: 33px;
display: flex;
flex-direction: row;
align-items: center;
 > small{
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  margin-right: 1px;
};
 > span {
  font-size: 24px;
  color: ${props => props.theme.colors.text};
  font-family: "Baloo 2";
  font-weight: bold;
  margin-right: 23px;
  
}
> button {
  cursor: pointer;
  :hover{
    opacity: 80%;
  }
}

`

export const ContainerIncrementAndDecrement = styled.div`
height: 38px;
width: 72px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between ;
/* padding-inline: 8px; */
border-radius: 6px;
background-color:${props => props.theme.colors.button} ;
 > button {
  display: flex;
  border: none;
  cursor: pointer;
  background: transparent;
  align-items: center ;
  justify-items: center;
  font-size: ${props => props.theme.sizes.text.m};
  color: ${props => props.theme.colors.title};
  
}
> span{
  /* margin-left: 8px ; */
  color: ${props => props.theme.colors.title};
  font-size: ${props => props.theme.sizes.text.m};
}
`