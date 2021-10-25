import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import AddToCartIcon from "@material-ui/icons/AddShoppingCart"
import SnackBar from '../../../common/SnackBar'

const useStyle = makeStyles((theme) => ({
    addToCartButton: {
        float: 'right',
        backgroundColor: '#9C27B0',
        color: 'white'
    }
}))

export default function AddToCart({ product }) {

    const classes = useStyle();
    const [isChanged, setIsChanged] = React.useState(0);

    const handleAddToCart = () => {
        setIsChanged(isChanged + 1)
    }

    return (
        <div style={{textAlign: 'end'}}>
            <Button
                className={classes.addToCartButton}
                onClick={handleAddToCart}
                disabled={false}
                variant="contained"
                size="large"
                startIcon={<AddToCartIcon />}
            >
                Add to Cart
            </Button>

            <SnackBar changed={isChanged} variant={"success"} message={`Product ${product.productName} added`} />
        </div>
    )
}
