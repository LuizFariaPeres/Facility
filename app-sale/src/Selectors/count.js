import { selector } from "recoil";
import { Items } from "../Atoms/itens";


export const ListCount = selector({
    key:'ListCountSelector',
    get: ({get}) =>{
        const list = get(Items);
        let final = 0;

        list.forEach(element => {
            final = final + (element.kg * element.price)
        });
       
        return final

    }
})