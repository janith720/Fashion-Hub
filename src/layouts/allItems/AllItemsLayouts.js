import { Grid } from "@material-ui/core";
import React from "react";
import CommonLayout from "../common/CommonLayout";
import FilterLayout from "./productList/FilterLayout";
import ProductList from "./productList/ProductList";

export default function AllItemsLayouts() {
  return (
    <CommonLayout>
      {/* <h2> All Items</h2> */}

      <Grid container>
        <Grid item xs={12} sm={8} md={12}>
          <ProductList />
        </Grid>
      </Grid>
    </CommonLayout>
  );
}
