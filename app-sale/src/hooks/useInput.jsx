import { useState } from "react";


export default function useInput(initValue = ''){

    const [valor, setValor] = useState(initValue);

    const onChange = (e) => {setValor(e.target.value)}

    const onClear = () =>{setValor('')}


    return({valor, onChange, onClear})
}