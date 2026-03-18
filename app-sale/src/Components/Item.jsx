import styled, {keyframes} from "styled-components"

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

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
        border:2px solid #024c36; 
        border-radius:20px;
        padding: 0.9em;
        animation: ${fadeIn} 0.5s ease-in-out;
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
        background-color: #024c36;
        align-self: center;
        width: 5em;
        border-radius: 20px;
        border: none;
        padding: 0.9em;
        transition: 0.5s ease-in-out;
    }
`

export default function Item({title, price, kg, onDelete, onUpdate}){


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