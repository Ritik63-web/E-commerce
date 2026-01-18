import {createContext, useState} from 'react'

export const ProductContext = createContext()

export const ProductProvider = ({children}) =>{
  const[productDetails, setProductDetails] = useState({
    productName:'',
    productPrice:'',
    category:'',
    productPic:''
  })
  return (
    <ProductContext.Provider value={{productDetails, setProductDetails}}>
      {children}
    </ProductContext.Provider>
)
}