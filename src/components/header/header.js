
import { Container, Content, Search, Logo } from "./styles"

export default function Header(){
    return( 
        <>
        <Container>
            <Content>
                <Logo>
            <h1>ZéporLitro</h1>
            </Logo>
            <Search>
            <input type='text' placeholder="Pesquise a sua cerveja favorita"></input>
            </Search>
            </Content>
        </Container>
        </>
    )
}