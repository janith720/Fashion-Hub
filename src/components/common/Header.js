import React from 'react'
import { Navbar,Nav, } from 'react-bootstrap'
import Logo from '../../images/rdfashionLogo.png'

export default function Header() {

    const NavLinks = [
        {
            title: 'ALL ITEMS',
            link: '/all-items'
        },
        {
            title: 'DRESSES',
            link: '/dress'
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
            style={{background: 'teal',padding: '8px 20px',fontFamily: 'Poppins'}}
            collapseOnSelect expand="lg"
            //  bg="dark" 
            //  variant="dark"
             >
            <Navbar.Brand href="#home">
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
                            <Nav.Link key={key} style={{color: 'white'}} href={val.link}>
                                {val.title}
                            </Nav.Link>
                        )
                    })}
                </Nav>
                <Nav>
                <Nav.Link eventKey={2} style={{color: 'white'}} href="#cart">
                    CART
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
