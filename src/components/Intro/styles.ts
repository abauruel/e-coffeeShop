import styled from "styled-components";

export const Content = styled.div`
height: 544px;
width: 100%;
padding: 92px 160px;
display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 56px;
`

export const Title = styled.div`
   >div{
    
    min-width: 588px;
    display: flex;
    flex-direction: column;

    span{
      color: #272221;
      font-size: ${props => props.theme.sizes.title.l.fontSize};
      font-family: 'Baloo 2', cursive;
      line-height: 130%;
      font-weight: bold;
    }
    small{
      margin-top: 16px;
      font-size: 20px;
      line-height: 130%;
    }
   }
`

export const Items = styled.div`
margin-top: 66px;
display: grid !important;
grid-template-columns: repeat(2,1fr);
    grid-template-rows: 1fr;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    div{
      display: flex;
      flex-direction: row;
      align-items: center;
      label{
        font-size: 16px;
      }
    }

   
`
type circleBackgroundProps = {
  size: number;
  backgroundColor: string
}
export const CircleBackground = styled.div<circleBackgroundProps>`
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.backgroundColor};
border-radius: 100%;
height: ${props => props.size}px;
width: ${props => props.size}px;
margin-right: 12px;
`