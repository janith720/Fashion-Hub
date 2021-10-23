import { Grid } from '@material-ui/core'
import React from 'react'
import ImageSwiper from '../../components/productDetails/LeftComponent/ImageSwiper'
import ProductInfo from '../../components/productDetails/RightComponent/ProductInfo'
import CommonLayout from '../common/CommonLayout'


export default function ProductDetails() {
    return (
        <div>
            <CommonLayout>
                <div style={{ marginBottom: '100px' }}>
                <Grid container spacing={3}
                    style={{backgroundColor: '#E1BEE7',borderRadius: '20px'}}
                >
                    <Grid item xs={12} md={6} lg={4}>
                        <ImageSwiper />
                    </Grid>
                    <Grid item xs={12} md={6} lg={7}>
                        <ProductInfo />
                    </Grid>
                </Grid>
                </div>
                
            </CommonLayout>
        </div>
    )
}
