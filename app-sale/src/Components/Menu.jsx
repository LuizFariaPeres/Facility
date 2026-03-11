import styled from "styled-components"

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
      width: 90%;
      border: none;
      border-radius: 0 0 20px 20px;
      background-color: white;
    }
`

export default function Menu(){

    return(
        <Conteiner>

        </Conteiner>
    )
}