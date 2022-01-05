import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    background-color: #333333;
    width: 100%;
    height: 90px;
    justify-content: center;
    flex-direction: row;
`

export const Content = styled.main`
width: 100%;
display: flex;
justify-content: space-around;

@media (max-width: 1000px) {
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
     }

;

    h1 {
        color: #FFCC00;
    }
`

export const Search = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;

    input{
        width: 27rem;
        height: 2.5rem;
        padding: 10px;
        border-radius: 0.5rem;
        color: #949494;
    }

    @media (max-width: 1000px) {
        width: 80%;
        input{
        width: 100%}
     }
`

export const Logo = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
`


;
