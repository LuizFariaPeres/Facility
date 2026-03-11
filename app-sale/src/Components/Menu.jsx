import styled from "styled-components"
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

const Conteiner = styled.div`
    @media ${devices.mobile}{
        display: flex;
        position: relative;
        justify-content:center;
        align-items:center;
        align-self: center;
        margin: 2em 0 0;
        width: 90%;
        height: 3.5em;
        border: none;
        border-radius:20px; 
        background-color: white;
    }
`
const Svg = styled.div`
    @media ${devices.mobile}{
        position:absolute;
        bottom: 15px;
        background-color: #5170ff;
        border-radius: 20px;
        padding: 0.9em;
    }
`

export default function Menu(){

    return(
        <Conteiner>
            <Svg>
                <IoBagOutline size={46} color='white'/>
            </Svg>
        </Conteiner>
    )
}