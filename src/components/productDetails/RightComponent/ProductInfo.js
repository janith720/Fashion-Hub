import { Typography } from '@material-ui/core'
import React from 'react'
import StockChip from './productInfo/StockChip'
import ProductPrice from '../../../components/common/productList/singleProduct/ProductPrice'

export default function ProductInfo() {
    return (
        <div style={{fontFamily: 'poppins'}}>
            <div style={{ display: 'inline-block', float: 'left' }}>
                <Typography variant="h4">Product 01</Typography>
            </div>
            <div style={{ display: 'inline-block', float: 'right', marginTop: '4px' }}>
                <StockChip productQty={10} />
            </div>
            <br />
            <br />
            <div style={{fontSize: '30px'}}>
             <ProductPrice ProductPrice={1200} />
            </div>
                
        </div>
    )
}

