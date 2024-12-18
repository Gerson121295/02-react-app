import { ReactElement } from "react";


export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[] ; //viene un hijo o un arreglo de hijos
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

//Interface para context permite definir el tipo de dato de los datos que seran exportados 
export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

//interfaz ya no es necesario debido a que los datos de ProductButtons se recibieron mediante Context y por argumentos
export interface ProductButtonsProps {
    increaseBy: (value: number) => void;
    counter: number;
} 

//Interface para /src/02-components/components/index.ts de com
export interface ProductCardHOCProps{
    ({ children, product }: ProductCardProps) : JSX.Element,
    Title: ({ title} : {title?: string }) => JSX.Element,
    Image: ({ img }: { img?: string }) => JSX.Element,
    Buttons: () => JSX.Element,
}
