import { selector } from "recoil";
import { Items } from "../Atoms/itens";


export const ListCount = selector({
    key:'ListCountSelector',
    get: ({get}) =>{
        const list = get(Items);
        let count = 0;
        let final = 0;
       
        list.forEach(element => {
            count += element.price
            final = count * element.kg
        });
       
        return final

    }
})