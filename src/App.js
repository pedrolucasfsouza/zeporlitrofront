import { GlobalStyle } from "./styles/global";
import React, { useState, useEffect } from "react"
import Header from "./components/header/header"
import Card from "./components/Card/Card"
import { Container, SubHeader} from "./styles"
import axios from "axios"

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {

        res.data.sort(function(a,b) {
          return a.plitro < b.plitro ? -1 : a.plitro > b.plitro ? 1 : 0;
      });

        setProducts(res.data);
        console.log(res.data)
        setTimeout(() => {
        },1);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
<>
<Header></Header>
<SubHeader>
<h1>Chega de ficar pensando no preço de cerveja!</h1>
<h2>Nós fazemos isso pra você, e atualizamos a cada 10 minutos</h2>
</SubHeader>
<Container>
  {
    products.map(product => <Card title={product.title} und={product.price} litro={product.plitro} src={product.img}></Card>)
  }
</Container>
<GlobalStyle></GlobalStyle>
</>
  );
}

export default App;
