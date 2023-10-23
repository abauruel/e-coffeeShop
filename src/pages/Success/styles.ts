import styled from 'styled-components'


export const SuccessContent = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
grid-gap: 12px;
padding-inline: 160px;
width: 100%;
> div {
  margin-top: 80px;
   >div {
    margin-top: 40px;
    border-radius: 6px 36px;
    padding: 40px;
    border-style: solid;
    background: 
    linear-gradient( #FAFAFA, #FAFAFA ) padding-box,
      linear-gradient(136deg, #dbac2c, #8047f8 ) border-box;
    border-radius: 6px 36px;
    border: 1px solid transparent;
padding: 5px;
box-sizing: border-box;
  }
}
& > div:nth-child(2){
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 210px;
}
h1 {
  color: #C47F17;
  font-size: 32px;
  font-weight: 130%;
  font-family: 'Baloo 2', 'sans-serif';
}
span{
  color: #403937;
  font-size: 20px;
  font-weight: 130%;
}
`
type ContentSuccess ={
  colorCircle: string
}

export const ContentSuccess = styled.div<ContentSuccess>`
display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
  > div {
  background: ${props=> props.colorCircle};
  border-radius : 100% ;
  height: 32px;
  width: 32px;
  margin: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

span{
  max-width: 310px;
  color: #574F4D;
  font-size: 16px;
}


`