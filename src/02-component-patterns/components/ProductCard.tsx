
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext} from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';


//Context para compartir informacion en los componentes hijos
export const ProductContext = createContext({} as ProductContextProps);

const { Provider} = ProductContext; //Provider es el proveedor del ProductContext



export const ProductCard = ({ children, product}: ProductCardProps) => {

    //customHook useProduct
    const {counter, increaseBy}  = useProduct();
    
  return (

    <Provider value={{ //value es la informacion que el Provider comparte a los hijos de ProductCard
        counter,
        product, 
        increaseBy
    }}> 
        <div className={styles.productCard}>
            
            {children}

            {/* //No se usa children - para pasar la informacion*/}
            {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title} />
            <ProductButtons 
                    increaseBy={increaseBy} 
                    counter={counter} 
            /> */}

        </div>
    </Provider>
  )
}


