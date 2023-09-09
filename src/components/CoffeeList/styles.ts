import styled from 'styled-components'


export const Wrapper = styled.div`
padding-inline: 160px;
width: 100%;


  h1 {
    font-size: ${props => props.theme.sizes.title.l};
    color: ${props => props.theme.colors.subtitle};
  };
  
  &{
    >div{
      display: flex ;
    flex-direction: row;
    flex-wrap: wrap;
    
    }
  }
  

`