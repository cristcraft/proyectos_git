import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import FormInput from './components/FormInput';
import ProductList from './components/ProductList'
import { useState } from 'react';

let products = JSON.parse(localStorage.getItem('products'))
if(!products){
  products = []
}
function App() {
  const [allProducts, setProduct] = useState(products)
  const addProduct = (product) =>{
    const newProduct = [...allProducts]

    newProduct.push({
      name: product[0],
      price: product[1],
      description: product[2]
    })

    localStorage.setItem('products', JSON.stringify(newProduct))
    setProduct(newProduct)
  }

  const delProduct = (id) =>{
    const newProduct = [...allProducts]

    newProduct.splice(id,1)
    localStorage.setItem('products', JSON.stringify(newProduct))
    setProduct(newProduct)
  }
  return (
    <div className="content-fluid d-flex flex-column align-items-center">
      <FormInput addProduct={addProduct} />
      <ProductList savedProducts={allProducts} delete={delProduct}/>
    </div>
  );
}

export default App;
