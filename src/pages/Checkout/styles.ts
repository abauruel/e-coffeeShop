import styled from "styled-components";

export const Content = styled.div`

    form {
        padding-inline: 160px;
    width: 100%;
    display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 32px;
    
 > div{
    h1{
        font-size: 18px;
        font-family: 'Baloo 2', 'sans-serif';
        line-height: 130%;
    }
 }
}
`
