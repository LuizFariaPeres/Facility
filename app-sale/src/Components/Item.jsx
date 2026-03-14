import styled from "styled-components"
import { FaRegTrashAlt } from "react-icons/fa";

export const sizes = {
  mobile: '420px',
  tablet: '768px',
  desktop: '1080px'
}

export const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(max-width: ${sizes.desktop})`
}


const Conteiner = styled.div`
    @media ${devices.mobile} {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1em;
        text-align: center;
        justify-content: center;
        align-items: center;
        background-color: white;
        border:2px solid blue; 
        border-radius:20px;
        padding: 0.9em;
    }
`
const Conteiner2 = styled.div`
    @media ${devices.mobile} {
        display: flex;
        width: 100%;
        gap: 1.5em;
        text-align: center;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius:20px;
        padding: 0.9em;
    }
`
const Text = styled.div`
 @media ${devices.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    text-align: center;
 }
 
`
const Btn = styled.button`
    @media ${devices.mobile} {
        display: flex;
        align-items:center;
        justify-content: center;
        background-color: #004aad;
        align-self: center;
        width: 5em;
        border-radius: 20px;
        border: none;
        padding: 0.9em;
        transition: 0.5s ease-in-out;
        &:hover{
            background-color: blue;
            transform: scale(1.2);
        }
    }
`

export default function Item({title, price, kg, onDelete}){


    const count = price * kg

    const countFomated = new Intl.NumberFormat('pt-BR',{
            style:'currency',
            currency:'BRL'
        }).format(count)
   


    return(
        
        <Conteiner>
            <h2>{title}</h2>
    
            <Text>
                <p>{countFomated}</p>
                <p>Vol:{kg}</p>
            </Text>
            <Btn onClick={onDelete}><FaRegTrashAlt size={32} color="white" /></Btn>
        </Conteiner>
    )
}