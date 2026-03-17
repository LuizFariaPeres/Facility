import { selector } from "recoil";
import { Items } from "../Atoms/itens";
import { Teto } from "../Atoms/tetos";


export const ListCount = selector({
    key:`CountTotality/${Math.random()}`,
    get: ({get}) =>{
        const list = get(Items);
        let final = 0;

        list.forEach(element => {
            final = final + (element.kg * element.price)
            
        });
       
        return final

    }
})
