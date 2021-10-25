import React from 'react'
import { Link } from 'react-router-dom'
import ProductImage from './singleProduct/ProductImage'
import ProductName from './singleProduct/ProductName'
import ProductPrice from './singleProduct/ProductPrice'
import SizeList from './singleProduct/SizeList'

export default function SingleProduct({product}) {
    return (
        <Link to="/details" style={{textDecoration: 'none',color: 'black', fontFamily: 'poppins'}}>
          <div style={{
            height: '450px', 
            backgroundColor: 'white', 
            padding: '5px', 
            borderRadius: '4px',
            width: '100%',
            textAlign: 'center'
            }}>
            <ProductImage ProductImage={product.images}/>
            <ProductName ProductName={product.productName} ProductType={product.type}/>
            <ProductPrice ProductPrice={product.price}/>
            <SizeList Productsizes={product.size} />
          </div>
        </Link>
        
    )
}
