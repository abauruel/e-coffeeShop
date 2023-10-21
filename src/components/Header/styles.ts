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
      cursor: pointer;
    }
    a {
      display: flex;
      align-items: center;
      border: none;
      padding: 8px;
      border-radius: 6px;
      height: 38px;
      background: ${props => props.theme.colors.yellowLight};
      width: 38px;
      margin-left: 12px;
      position: relative;

      > span{
        position: absolute;
        top: -10px;
        right: -10px;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        /* padding: 2px; */
        margin: 2px;
        background: #C47F17;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 12px;
        line-height: 130;
        font-weight: bold;
      }
    }
    
 }
`
