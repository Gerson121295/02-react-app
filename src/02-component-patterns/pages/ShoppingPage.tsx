import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

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

  {/* Una nueva forma de realizar el envio de props a productCard */}
           <ProductCard product={product} >
            <ProductCard.Image /> 
            <ProductCard.Title title={'Hola Mundo'}/>  
            <ProductCard.Buttons /> 
           </ProductCard> 


 {/*        //Otra forma de envio de props a productCard   */}
         <ProductCard product={product} >
              <ProductImage />   
              <ProductTitle />
              <ProductButtons /> 
          </ProductCard>
            


          

        </div>


    </div>
  )
}
