import React from "react";
import CommonLayout from "../common/CommonLayout";
import AllItemsLayouts from "../allItems/AllItemsLayouts";
import ProductList from "../allItems/productList/ProductList";

export default function OtherRoutesLayout({ title }) {
  return (
    <CommonLayout>
      <div>
        {/* // TODO: Develop these pages */}
        {/* <h2>You'll develop this {title} page your Awesome way.</h2> */}
        <ProductList />
      </div>
    </CommonLayout>
  );
}
