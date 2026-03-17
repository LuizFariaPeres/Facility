import Item from "./Item"
import styled from "styled-components"
import { Items } from "../Atoms/itens"
import {ListCount} from '../Selectors/count'
import { Sizes } from "../Selectors/size"
import { useRecoilState, useRecoilValue } from "recoil"
import Return from "./Return"
import { Teto } from "../Atoms/tetos"

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
        flex-direction: column;
        align-items: center;
        padding: 1.5em;
        gap: 0.9em;
        width: 100%;
        height: 100dvh;
        background: #BCD9FF;
        background: radial-gradient(circle, rgba(188, 217, 255, 1) 70%, rgba(255, 255, 255, 1) 100%);
    }
`
const ItemsConteiner = styled.div`
    @media ${devices.mobile}{
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        scrollbar-width: none;
        align-items: center;
        padding: 0.5em;
        gap: 0.9em;
        width: 100%;
        height: 90dvh;
        border: 2px solid #004aad;
        border-radius: 20px;
        
    }
`
const Total = styled.div`
    @media ${devices.mobile}{
        display: flex;
        align-items: center;
        flex-direction: column;
        color: white;
        padding: 0.9em;
        gap:0.5em; 
        border-radius: 20px;
        width: 100%;
        background-color: #004aad;
    }
`

export default function Cart(){

    const [saleItens, setSaleItens] = useRecoilState(Items)
    const total = useRecoilValue(ListCount)
    const teto = useRecoilValue(Teto)
    const size = useRecoilValue(Sizes)
    
    const remove = (indexRemove) => {
        setSaleItens(prev => prev.filter((_, index) => index !== indexRemove))
    }
    

    return(
        <Conteiner>
            <ItemsConteiner>     
                {saleItens.map((item, index) =>(
                    <Item key={index} title={item.title} price={item.price} kg={item.kg} onDelete={()=> remove(index)}/>
                ))}
            </ItemsConteiner>
                <Total>
                    <h1>Total: {total != undefined?total.toFixed(2):total}</h1>
                    <h2>Teto: {teto.tetoFinal}</h2>
                    <p>Quantidade: {size} un.</p>
                </Total>
            <Return/>
        </Conteiner>
    )
}