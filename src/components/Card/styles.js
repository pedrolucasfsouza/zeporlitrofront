import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    width: 230px;
    height: 269px;
    border-radius: 0.5rem;
    justify-content: center;
    flex-direction: column;
    margin: 10px 5px;

    :hover{
        width: 240px;
        height: 280px;
        box-shadow: rgba(243, 225, 107) 0px 0px 0px 3px;
    }
`

export const Content = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
padding: 10px;
text-align: center;
    h1 {
        color: #FFCC00;
    }
    img{
        width: 158px;
        height: 158px;
    }
`
;