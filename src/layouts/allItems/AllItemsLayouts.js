import { Grid } from '@material-ui/core'
import React from 'react'
import CommonLayout from '../common/CommonLayout'
import ProductList from './ProductList'

export default function AllItemsLayouts() {
    return (
        <CommonLayout>
           <h2> AllItems</h2>

           <Grid container>
              <Grid item xs={12} sm={4} md={2}>
                  <h2>Filter</h2>
              </Grid>
              <Grid item xs={12} sm={8} md={10}>
                  <ProductList />
              </Grid>
           </Grid>
        </CommonLayout>
        
    )
}
