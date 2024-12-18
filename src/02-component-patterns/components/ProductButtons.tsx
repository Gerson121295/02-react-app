
import { useContext } from 'react';
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard';

export const ProductButtons = () => {    //  ({counter, increaseBy}: ProductButtonsProps) => {

    //useContext para extraer datos: counter, increaseBy evitando asi recibirlo por argumento
    const { increaseBy, counter } = useContext(ProductContext);

    return(
        <div className={styles.buttonsContainer}>
        <button 
            className={styles.buttonMinus}
            onClick={ () => increaseBy( -1 )}
        > - </button>

        <div className={styles.countLabel}> {counter} </div>

        <button 
            className={styles.buttonAdd}
            onClick={ () => increaseBy (+1)}
        > + </button>
    </div>
    )
}

