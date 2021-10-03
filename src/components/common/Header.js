import React from 'react'
import { Navbar,Nav, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../images/rdfashionLogo.png'

export default function Header() {

    const NavLinks = [
        {
            title: 'ALL ITEMS',
            link: '/all-items'
        },
        {
            title: 'DRESSES',
            link: '/dresses'
        },
        {
            title: 'SEASONAL',
            link: '/seasonal'
        },
        {
            title: 'DENIMS',
            link: '/denims'
        },
        {
            title: 'TSHIRTS',
            link: '/t-shirts'
        },
        {
            title: 'TOPS',
            link: '/tops'
        }
        
    ]

    return (
        <div>
            <Navbar 
            onToggle={() => console.log("Toggle")}
            onSelect={(eventKey) => console.log(eventKey)}
            style={{background: 'teal',padding: '8px 22px',fontFamily: 'Poppins'}}
            collapseOnSelect expand="lg"
            //  bg="dark" 
            //  variant="dark"
             >
            <Navbar.Brand href="/">
            <img
                src={Logo}
                width="40"
                height="28"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
                rdFashion
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {NavLinks.map((val,key) => {
                        return(
                            <Link key={key} style={{color: 'white',textDecoration: 'none',paddingLeft: '12px'}} to={val.link}>
                                {val.title}
                            </Link>
                        )
                    })}
                </Nav>
                <Nav>
                <Link style={{color: 'white',textDecoration: 'none',paddingLeft: '12px'}} to="/cart">
                    CART
                </Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
