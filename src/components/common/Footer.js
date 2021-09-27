import { Button } from "@material-ui/core";
import React from 'react'

export default function Footer() {
    return (
        <div style={{
            position: 'fixed',
            bottom: '0px',
            width: '100%',
            background: 'teal',
            padding: '10px'
        }}>
            <small>&copy; Copyright {new Date().getFullYear()}, Janith Ukwattage</small>
            <div style={{
                display: 'inline',
                float: 'right'
            }}>
                <Button variant="contained" style={{
                    color: 'teal',
                    fontWeight: 'bold',
                    background: 'white'
                }}>Learn React</Button>
            </div>
        </div>
    )
}