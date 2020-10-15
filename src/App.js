import React, {useEffect, useState} from 'react';
import './App.css';
import {Img} from 'react-image'
import ProductService from './services/ProductService'
import LoadingPage from './pages/LoadingPage';
import LoadingComponent from './components/LoadingComponent';
import ProductListComponent from './components/ProductListComponent'

function App() {

  const [loading, setLoading] = useState("")
  const [productList, setProductList] = useState([])

  useEffect(() => {
      ProductService.getAll()
          .then((resp)=>{
              setLoading("show");
              setProductList(resp.data)
          })
          .catch(e=>console.log(e))
  }, [])

  return (loading === "")?(<LoadingPage></LoadingPage>):(
    
    <div className={"App "+ loading}>
      
      <ProductListComponent productList={productList} ></ProductListComponent>

    </div>
  );
}

export default App;
