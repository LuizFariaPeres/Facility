import useInput from "../hooks/useInput"
import styled from "styled-components"
import Menu from "./Menu"
import { useRecoilState, useRecoilValue } from "recoil"
import {Items} from '../Atoms/itens'
import {ListCount} from '../Selectors/count'
import { Sizes } from "../Selectors/size"
import { useEffect, useState } from "react"
import { Teto } from "../Atoms/tetos"
import { Name } from "../Atoms/name"

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
      height: 100vh;
      border: none;
      border-radius: 0 0 20px 20px;
      background: #598b68;
      background: radial-gradient(circle, #598b68 10%, #dcf0bb 100%);
      padding: 1em;
      color: #012e21;
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
const Based = styled.form`
  @media ${devices.mobile} {  
    display: flex;
    flex-direction: column;
    gap: 0.9em;
  }
`
const Btn = styled.button`  
  @media ${devices.mobile} {  
    width: 70%;
    padding: 0.5em;
    border: none;
    border-radius: 20px;
    background-color: #024c36;
    color: white;
    font-size: 25px;
    align-self: center;
  }
`
const Totalit = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight:bold;
  gap: 0.9em;
  align-self: center;
  margin: 0.5em 0 0 0;
`
export default function Form(){



  const itemName = useInput()
  const itemPrice = useInput()
  const itemKg = useInput()

  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [day, setDay] = useState(new Date().toLocaleDateString());
  const total = useRecoilValue(ListCount)
  const size = useRecoilValue(Sizes)
  const tetoTotal = useRecoilValue(Teto);
  const nameUser = useRecoilValue(Name);

  useEffect(()=>{
      const timer = setInterval(()=>{
        setHour(new Date().toLocaleTimeString())
      },1000)
      return () => clearInterval(timer) 
  },[])

  const [list, setList] = useRecoilState(Items)


  const handleSubmit = (e)=>{
    e.preventDefault()
    if(itemName.valor.trim() == '' || itemPrice == ''){
      alert('Preencha o campo')
      return
    }

    const newTask = {title: itemName.valor, price: itemPrice.valor, kg: itemKg.valor}

    setList([...list, newTask])
    itemName.onClear()
    itemPrice.onClear()
    itemKg.onClear()
    
  }
  
  


  return(
    <Conteiner>
        <h1>Olá, {nameUser}</h1>
        <h2>{hour} {day}</h2>
        <Based onSubmit={handleSubmit}>
            <Inputs type="text" value={itemName.valor} onChange={itemName.onChange} placeholder='Digite o Item'/>
            <Inputs type="number" value={itemPrice.valor} onChange={itemPrice.onChange} placeholder='Digite o Preço'/>
            <Inputs type="number" value={itemKg.valor} onChange={itemKg.onChange} placeholder='Digite a Unidade ou Peso'/>
            <Btn>Adicionar</Btn>  
        </Based>

        <Totalit>
            <h1>Total: {total != undefined? total.toFixed(2): total}</h1>
            <h2>Teto de Gastos: {tetoTotal}</h2>
            <p>Quantidade: {size} un.</p>
        </Totalit>
        <Menu/>
    </Conteiner>

  )
}
