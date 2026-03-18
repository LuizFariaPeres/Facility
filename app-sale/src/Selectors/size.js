import { selector } from "recoil";
import { Items } from "../Atoms/itens";


export const Sizes = selector({
    key:'SizesSelector',
    get:({get})=>{
        const list = get(Items)
        let RefatorList = list.length;

        return RefatorList
    }
    
})