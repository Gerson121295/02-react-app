import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'


export const ProductImage = ({ img = '' }) => { //{product}: Props

    const {product} = useContext(ProductContext)

    let imgToShow: string;

    if (img){
        imgToShow = img; //si imagen es true o vine por props del padre entonces imgToShow es igual a img
    }else if (product.img){
        imgToShow = product.img; //si product.img es true o viene del context entonces imgToShow es = a product.img
    }else{ 
        imgToShow = noImage;  //en caso contrario de no venir la imagen imgToShow es = a noImage
    }

    return (
        <img className={styles.productImg} src={ imgToShow } alt="Product" /> 
    )
}