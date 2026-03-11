import Menu from './Components/Menu'
import styled from 'styled-components'

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
      gap: 0.9em;
      width: 100%;
      height: 100dvh;
      border: none;
      border-radius: 0 0 20px 20px;
      background-color: blue;
      padding: 1em;
      color: white;
    }
`
const Inputs = styled.input`
    @media ${devices.mobile}{
      display: flex;
      text-align: center;
      font-size: 16px;
      width: 90%;
      height: 5em;
      border-radius: 20px;
      margin: 0.5em 0;
      align-self: center;
    }
`
const Btn = styled.button`  
  @media ${devices.mobile} {  
    width: 90%;
    padding: 0.9em;
    border: none;
    border-radius: 20px;
    font-size: 25px;
    align-self: center;
  }
`
const Totalit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9em;
  align-self: center;
  margin: 1.5em 0 0 0;
`


export default function App() {

  return (
   
    <Conteiner>
        <h1>Olá, User</h1>
        <h2>10:09 ter, 08/09/2026</h2>
        <Inputs placeholder='Nome'/>
        <Inputs placeholder='Preço'/>
        <Inputs placeholder='Volume'/>
        <Btn>Adicionar</Btn>

        <Totalit>
          <h1>Total: R$100,00</h1>
          <h2>Quantidade: 100 unidades</h2>
        </Totalit>

        <Menu/>
    </Conteiner>
  )
}


