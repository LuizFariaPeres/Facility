import styled from "styled-components"
import { Teto } from "../Atoms/tetos"
import { useRecoilState } from "recoil"
import useInput from "../hooks/useInput"
import {useNavigate } from "react-router-dom"
import { Name } from "../Atoms/name"

import Logo from '../img/FacilityLogo.png'

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
const Conteiner = styled.form`
    @media ${devices.mobile} {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.9em;
      width: 100%;
      height: 100dvh;
      border: none;
      border-radius: 0 0 20px 20px;
      background: #598b68;
      background: radial-gradient(circle, #598b68 10%, #dcf0bb 100%);
      padding: 1em;
      color: black;
    }
`
const Btn = styled.button`  
  @media ${devices.mobile} {  
    display: flex;
    width: 50%;
    justify-content: center;
    text-decoration: none;
    padding: 0.3em;
    border: none;
    border-radius: 20px;
    background-color: #024c36;
    color: white;
    font-size: 25px;
    align-self: center;
  }
`
const Inputs = styled.input`
    @media ${devices.mobile}{
      display: flex;
      text-align: center;
      width: 90%;
      padding: 1.5em;
      border: none;
      border-radius: 20px;
      background-color: #024c36;
      margin: 0.5em 0;
      align-self: center;
      font-size: 16px;
      font-weight: bold;
      color: white;
      &::placeholder{
        color: white;
        font-size: 16px;
        font-weight: bold;
      }
    }
`
const Img = styled.img`
  width: 90%;
  height: 20em;
`


export default function Login (){

    const teto = useInput();
    const name = useInput();
    const[tetoState, setTetoState] = useRecoilState(Teto);
    const[nameSet, setNameSet] = useRecoilState(Name)
    let navegat = useNavigate()


    const handleSubmit = (e) =>{
        e.preventDefault();

        if(name.valor.trim() !== ''){
            setTetoState(teto.valor)
            setNameSet(name.valor)
            navegat('/Components/Form')
            name.onClear();
            teto.onClear();
        }else{
          alert(`O campo nome é obrigatorio`)
        }
    }


    return(
        <Conteiner onSubmit={handleSubmit}>
            <Img src={Logo} alt="logo"/>
            <Inputs type="text" value={name.valor} onChange={name.onChange} placeholder="Nome"/>
            <Inputs type="number" value={teto.valor} onChange={teto.onChange} placeholder="Teto de gastos"/>
            <Btn type="submit">Login</Btn>
        </Conteiner>
    )
}