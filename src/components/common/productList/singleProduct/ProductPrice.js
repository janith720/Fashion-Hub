import React from 'react'

export default function ProductPrice({ ProductPrice }) {
    return (
        <div style={{fontWeight: 'bold'}}>
            {ProductPrice
                ? "Rs: " +
                ProductPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",") +
                ".00": ""
             }
        </div>
    )
}
