import styled from "styled-components"
import {Link} from 'react-router-dom'

export const  Container = styled.div`
background: #0A0A10;
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
gap:40px;

`
export const Img = styled.img`
margin-top: 40px;
   
`
export const H1 = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
text-align: center;
color: #FFFFFF;
margin-bottom: 55px;
letter-spacing: 0.592px;

`
export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`


export const Button = styled(Link)`
width: 312px;
height: 68px;
background: rgba(255, 255, 255, 0.14);
margin-top: 70px;
font-style: normal;
font-weight: 900;
font-size: 17px;
letter-spacing: 1.5px;
border-radius: 5px;
border: none;
text-align: center;
color: #FFFFFF;
cursor:pointer;
margin-bottom: 55px;
display: flex;
justify-content: center;
align-items: center;
.buttonSeta{
    margin-right: 10px;
    transform: rotatey(180deg);
}
`
export const User = styled.li`
list-style:none;
.containerCard{
    display: flex;
    flex-direction:row;
    width: 300px;
    height: 90px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    justify-content: space-between;
    align-items: center;  
    margin-bottom:15px;
    
     
}
.card{
    display: flex;
    flex-direction: column;
    gap: 26px;
    text-indent: 10px;
    font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;

}
.containerCard button{
        background: none;
        border: none;
        cursor: pointer;
        margin-right: 7px;
        &:hover{
            border-radius:50%;
            background-color:#e5e5e5;
            width:40px;
            height:40px;
            
        }
}


`