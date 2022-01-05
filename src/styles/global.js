import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --blue: #578EE1;

    --text-title: #9FA2B4;
    --text-body: #9FA2B4;

    --background: #F0F2F5;
    --shape: #FFFFFF;
    
    --menu: #363740;
    --link: #A4A6B3;

    --bg-client: #FBFBFB;

    }
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }
    body{
        background: var(--background);
        -webkit-font-smoothing:antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        header {
    --start: 15%}
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
        max-height: 900px;
        overflow: auto;

        
        h1 {
            color: #aaa;
            display: inline-block;
            margin: 0rem 0rem 2rem 0rem;
        }

        h2 {

            color: #aaa;
            display: inline-block;
            margin: 0rem 0rem 1rem 0rem;
        }

        h3{

            color: white;
            display: inline-block;
            margin: 1rem 1rem 1rem 1rem;


        }

        .bg-buy{
            background-image: repeating-radial-gradient(circle at 15%, transparent 0%, transparent 10%, rgba(54, 89, 219, .33) 10%, rgba(54, 89, 219, .33) 17%), linear-gradient(to right, #5b7cfa, #3659db);
            width: 100%;
            border-radius: 5px 5px 0px 0px;
            margin-top: 10px;
        }

        .bg-sell{
            background-image: repeating-radial-gradient(circle at 15%, transparent 0%, transparent 10%, rgba(212, 42, 74, .33) 10%, rgba(238, 47, 82, .33) 17%), linear-gradient(to right, #E73F5D, #FA3D60);
            width: 100%;
            border-radius: 5px 5px 0px 0px;
            margin-top: 10px;
        }
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        img{
            width: 50px;
            right: 1rem;
            position: absolute;
            top: 0rem;
            border: 0;
        }

     &:hover{
         filter: brightness(0.8)
     }   
    }


    `
