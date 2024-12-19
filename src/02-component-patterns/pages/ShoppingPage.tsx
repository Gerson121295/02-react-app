import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';


const product ={ 
  id: '1',
  title: 'Coffe Mug - Card',
  img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shoping Store</h1>
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap:'wrap'
        }}>

  {/* Forma 1 de realizar el envio de props a productCard */}
           <ProductCard
              className="bg-dark text-white"  
              product={product}  
          >
            <ProductCard.Image className="custom-image" /> 
            <ProductCard.Title className="text-white text-bold" activeClass="active" />  
            <ProductCard.Buttons className="custom-buttons"/> 
           </ProductCard> 


 {/*        //Forma 2 de envio de props a productCard y envio de Style(custom-styles) a hijos mediante className(puede ser otra palabra o especificamente className) config realizada en los hijos  */}
         <ProductCard 
            className="bg-dark text-white"
            product={product} 
         >
              <ProductImage className="custom-image" style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}/>   
              <ProductTitle className="text-white text-bold" activeClass="active"/>
              <ProductButtons className="custom-buttons"/> 
          </ProductCard>
            
  {/*        //Forma 3  */ }
  <ProductCard 
            product={product} 
            style={{
              backgroundColor: '#70D1F8',
            }}
         >
              <ProductImage
                style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}
              />   

              <ProductTitle 
                style={{fontWeight: 'bold'}}
              />

              <ProductButtons 
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                }}
              /> 
          </ProductCard>


        </div>


    </div>
  )
}
