import styled from "styled-components"
import {Link} from 'react-router-dom'
import { IoBagOutline } from "react-icons/io5";
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




const Conteiner = styled(Link)`
    @media ${devices.mobile}{
        display: flex;
        align-items:center;
        justify-content: center;
        background-color: #004aad;
        align-self: center;
        width: 5em;
        border-radius: 20px;
        padding: 0.9em;
        margin-top: 0.5em;
        transition: 0.5s ease-in-out;
        &:hover{
            background-color: blue;
            transform: scale(1.2);
        }
    }
`

export default function Menu(){

    return(
        <Conteiner to='/Components/Cart'>
            <IoBagOutline size={46} color='white'/>
        </Conteiner>
    )
}