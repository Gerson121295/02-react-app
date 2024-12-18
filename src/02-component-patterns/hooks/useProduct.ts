
import { useState } from 'react'

export const useProduct = () => {

    const [counter, setCounter] = useState(0);

    const increaseBy = (value:number) => {
        //toma el valor anterior y no puede regresar un numero menor a 0
        setCounter(prev => Math.max( prev + value, 0));
    }

    //lo que retorna el hook
  return {
    counter,
    increaseBy,
}
}


