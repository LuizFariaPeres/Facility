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
const Text = styled.div`
 @media ${devices.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    text-align: center;
 }
 
`

export default function Item({title, price, kg }){


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
                <p>KG:{kg}</p>
            </Text>
        </Conteiner>
    )
}