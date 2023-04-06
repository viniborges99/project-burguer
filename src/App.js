import React from 'react';
import { Container, H1, Img, ContainerItens, Label, Input, Button, User } from './styles';
import logo from "./assets/logo.png"
import seta from "./assets/seta.svg"
import { v4 as uuid } from 'uuid';
import lixeira from "./assets/lixeira.svg"


function App() {

  const users = [{ id: uuid(), pedido: "1 x-salada", name: "vinicius" }]


  return (
    <Container>
      <Img src={logo} alt='' />
      <ContainerItens>
        <H1>Faça seu Pedido</H1>

        <Label>Pedido</Label>
        <Input placeholder='Meu pedido'></Input>

        <Label>Nome do Cliente</Label>
        <Input placeholder='Meu nome'></Input>

        <Button>Novo Pedido <img className='buttonSeta' src={seta} alt="seta" /></Button>
        <ul>
          {users.map((user) => (

            <User key={user.id}>
              <div className='containerCard'>

                <div className='card'>
                  <p>{user.pedido}</p>
                  
                  <p>{user.name}</p>
                </div>
                <button><img src={lixeira} alt='Lata de lixo' /></button>
              </div>

            </User>
          ))
          }
        </ul>
      </ContainerItens>
    </Container>
  )
}

export default App;
