
import { Container, Content, Search, Logo } from "./styles"

export default function Header(props){
    return( 
        <>
        <Container>
            <Content>
                <img src={props.src}></img>
                <p>{props.title}</p>
                <p>{props.und} / Und</p>
                <p>{props.litro} / Litro</p>

            </Content>
        </Container>
        </>
    )
}