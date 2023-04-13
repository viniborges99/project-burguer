import React,{useState,useRef} from 'react';
import axios from "axios"
import { Container, H1, Img, ContainerItens, Label, Input, Button } from './styles';
import logo from "../../assets/logo.png"
import seta from "../../assets/seta.svg"
import { v4 as uuid } from 'uuid';
import {Link} from 'react-router-dom'




function App() {

  //const users = []
  const [users,setUsers]= useState([])
  const inputPedido=useRef()
  const inputName = useRef()

  
  async function addNewOrder(){

    const {data: newUser} = await axios.post("http://localhost:3001/users",{id:uuid(),pedido:inputPedido.current.value, name:inputName.current.value})
    
    setUsers([ ...users,newUser])

    
    
  } 

  return (
    <Container>
      <Img src={logo} alt='' />
      <ContainerItens>
        <H1>Faça seu Pedido</H1>

        <Label>Pedido</Label>
        <Input ref={inputPedido} placeholder='Meu pedido'></Input>

        <Label>Nome do Cliente</Label>
        <Input ref={inputName} placeholder='Meu nome'></Input>

        <Button to="/usuarios" onClick={addNewOrder}>Novo Pedido <img className='buttonSeta' src={seta} alt="seta" /></Button>
       
      </ContainerItens>
    </Container>
  )
}

export default App;
