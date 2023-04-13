import React,{useState, useEffect} from 'react';
import axios from "axios"
import { Container, H1, Img, ContainerItens, Button, User } from './styles';
import pedido from "../../assets/pedido.png"
import seta from "../../assets/seta.svg"
import lixeira from "../../assets/lixeira.svg"


function Users() {

  //const users = []
  const [users,setUsers]= useState([])
 
  useEffect(()=>{
    async function FetchUsers(){

      const {data: newUsers} = await axios.get("http://localhost:3001/users")
      setUsers(newUsers)
    }
    FetchUsers()

  },[])


  async function deleteUser(userId){
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const NewUser = users.filter(user => user.id !== userId)
    setUsers(NewUser)
  }

  


  return (
    <Container>
      <Img src={pedido} alt='imagem de um pedido pronto' />
      <ContainerItens>
        <H1>Pedidos</H1>
        
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <div className='containerCard'>
                <div className='card'>
                  <p>{user.pedido}</p>                
                  <p>{user.name}</p>
                </div>
                <button onClick={()=>deleteUser(user.id)} ><img src={lixeira} alt='Lata de lixo' /></button>
              </div>
            </User>
          ))}
        </ul>
        <Button to="/"><img className='buttonSeta' src={seta} alt="seta" />Voltar</Button>
      </ContainerItens>
    </Container>
  )
}

export default Users;
