
import { Container, Content, Search, Logo } from "./styles"

export default function Header(props){
    return( 
        <>
        <Container>
            <Content>
                <img src={props.src}></img>
                <p>{props.title}</p>
                <p>R$ {props.und} / Und</p>
                <strong>R$ {props.litro} / Litro</strong>

            </Content>
        </Container>
        </>
    )
}