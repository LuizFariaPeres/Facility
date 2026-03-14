import useInput from "../hooks/useInput"
import styled from "styled-components"
import Menu from "./Menu"
import { useRecoilState, useRecoilValue } from "recoil"
import {Items} from '../Atoms/itens'
import {ListCount} from '../Selectors/count'
import { Sizes } from "../Selectors/size"
import { useEffect, useState } from "react"

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
      background: #BCD9FF;
      background: radial-gradient(circle, rgba(188, 217, 255, 1) 70%, rgba(255, 255, 255, 1) 100%);
      padding: 1em;
      color: black;
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
      background-color: #004aad;
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
    background-color: #004aad;
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
  margin: 4em 0 0 0;
`
export default function Form(){



  const itemName = useInput()
  const itemPrice = useInput()
  const itemKg = useInput()

  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [day, setDay] = useState(new Date().toLocaleDateString());
  const total = useRecoilValue(ListCount)
  const size = useRecoilValue(Sizes)

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
        <h1>Olá, User</h1>
        <h2>{hour} {day}</h2>
        <Based onSubmit={handleSubmit}>
            <Inputs type="text" value={itemName.valor} onChange={itemName.onChange} placeholder='Nome'/>
            <Inputs type="number" value={itemPrice.valor} onChange={itemPrice.onChange} placeholder='Preço'/>
            <Inputs type="number" value={itemKg.valor} onChange={itemKg.onChange} placeholder='Volume'/>
            <Btn>Adicionar</Btn>  
        </Based>

        <Totalit>
            <h1>Total: {total != undefined? total.toFixed(2): total}</h1>
            <p>Quantidade: {size} un.</p>
        </Totalit>
        <Menu/>
    </Conteiner>

  )
}
