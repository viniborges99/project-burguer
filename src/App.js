import React from 'react';
import { Container, H1, Img,ContainerItens,Label, Input,Button } from './styles';
import logo from "./assets/logo.png"
import seta from "./assets/seta.svg"


function App() {
  return(
    <Container>
      <Img src={logo}alt=''/>
      <ContainerItens>
      <H1>Faça seu Pedido</H1>

      <Label>Pedido</Label>
      <Input placeholder='Meu pedido'></Input>

      <Label>Nome do Cliente</Label>
      <Input placeholder='Meu nome'></Input>
      
      <Button>Novo Pedido <img className='buttonSeta' src={seta} alt="seta" /></Button>
      </ContainerItens>
      
    </Container>
  ) 
}

export default App;
