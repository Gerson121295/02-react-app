
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext} from 'react';
import { ReactElement } from "react";
import { Product, ProductContextProps } from '../interfaces/interfaces';


//Context para compartir informacion en los componentes hijos
export const ProductContext = createContext({} as ProductContextProps);

const { Provider} = ProductContext; //Provider es el proveedor del ProductContext


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[]; //viene un hijo o un arreglo de hijos
    className?: string;  //forma 1 de agregar style mediante className
    style?:  React.CSSProperties; //forma 2 de agregar style mediante style. para saber que style es tipo React.CSSProperties | undefined en un div se agrega la etiqueta style y luego se pasa el cursos y aparece el tipo de dato
  }


export const ProductCard = ({ children, product, className, style}: Props) => {

    //customHook useProduct
    const {counter, increaseBy}  = useProduct();
    
  return (

    <Provider value={{ //value es la informacion que el Provider comparte a los hijos de ProductCard
        counter,
        product, 
        increaseBy
    }}> 
        <div 
          className={`${ styles.productCard } ${ className }`} //por className se pasa el style definido en el padre ShoppingPage.tsx
          style={style} //se agrega el style proveniente de la prop style definido en el padre ShoppingPage.tsx
        >
            
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


