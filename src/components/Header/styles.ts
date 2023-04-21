import styled from 'styled-components'

export const Wrapper = styled.nav`
height: 104px;
width: '100%';
display: flex;
align-items: center;
justify-content: space-between;
padding-inline: 160px;
 div {
    
    display: flex;
    align-items: center;
    button {
      background: ${props => props.theme.colors.purpleLight};
      display: flex;
      align-items: center;
      border: none;
      padding: 8px;
      border-radius: 6px;
      color: ${props => props.theme.colors.purpleDark};
      height: 38px;
      span {
        margin: 0 4px 0 4px;
        font-size: ${props => props.theme.sizes.text.s}
      }
    &:last-child{
      background: ${props => props.theme.colors.yellowLight};
      width: 38px;
      margin-left: 12px;
    }
  }
 }
`
