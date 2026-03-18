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
        width: 100%;
        text-align: center;
        justify-content: space-around;
        align-items: center;
        background-color: white;
        border:2px solid #024c36; 
        border-radius:20px;
        padding: 0.5em;
        animation: ${fadeIn} 0.5s ease-in-out;
    }
`
const Text = styled.div`
 @media ${devices.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    color: #024c36;
    text-align: center;
 }
 
`
const Price = styled.div`
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
        width: 5em;
        border: none;
        background-color: transparent;
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
            <Text>
                <h2>{title}</h2>
                <Price>
                    <p>{countFomated}</p>
                    <p>Vol:{kg}</p>
                </Price>
            </Text>
            <Btn onClick={onDelete}><FaRegTrashAlt size={42} color="#024c36" /></Btn>
        </Conteiner>
    )
}