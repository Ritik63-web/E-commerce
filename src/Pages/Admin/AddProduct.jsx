import React, {useContext} from 'react'
import {ProductContext} from '../../Context/ProductContext'

const AddProduct = () => {
  const {productDetails, setProductDetails} = useContext(ProductContext)

  function handleChange(e){
    const {name, value} = e.target
    setProductDetails(pre=>({
      ...pre,
      [name]:value
    }))
  }
  function handleSubmit(){
    localStorage.setItem('Product Details', JSON.stringify(productDetails))
  }
  return (
    <>
    <div className="container team">
      <h1 className="text-center my-bg fs-4 text-center text-light rounded-2 py-1">
        Add Product
      </h1>
      <form action="" onSubmit={handleSubmit}>
      <div className="row mb-3">
      <input
          type="text"
          className="form-control"
          name="productName"
          placeholder="Product Name"
          onChange={(e)=>handleChange(e)}
        />
      </div>
      <div className="row mb-3">
        <input
          type="text"
          className="form-control"
          name="productPrice"
          placeholder="Product Price"
          onChange={(e)=>handleChange(e)}
        />
      </div>
      <div className="row mb-3">
        <select name="Category" className='form-select' onChange={(e)=>handleChange(e)}>
          <option value="chair">Chair</option>
          <option value="table">Table</option>
          <option value="almirah">Almirah</option>
        </select>
      </div>
      <div className="row mb-3">
        <input
          type="file"
          className=""
          name="productPic"
          placeholder="Bio" 
          onChange={(e)=>handleChange(e)}/>
      </div>
      <div className="row mb-3 justify-content-center">
        <div className="col-md-6">
        <button type='submit' className="btn btn-primary fs-5 w-100">Submit</button>
        </div>
      </div>
      </form>
    </div>
  </>
  )
}

export default AddProduct