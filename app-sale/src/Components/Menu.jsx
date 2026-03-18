import styled from "styled-components"
import {Link} from 'react-router-dom'
import { MdOutlineShoppingCart } from "react-icons/md";
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
        background-color: #024c36;
        align-self: center;
        width: 5em;
        border-radius: 20px;
        padding: 0.9em;
        margin-top: 0.5em;
        transition: 0.5s ease-in-out;
    }
`

export default function Menu(){

    return(
        <Conteiner to='/Components/Cart'>
            <MdOutlineShoppingCart size={46} color='white'/>
        </Conteiner>
    )
}