import React from 'react'
import { Badge, Dropdown, Container, FormControl, Nav, Navbar } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link href='/'>Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl
                        style={{ width: 500 }}
                        placeholder='Search a Product'
                        className='m-auto'
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown alignLeft>
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart color='white' fontSize='25px' style={{marginRight: 5}} />
                            <Badge>10</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            <span style={{ padding: 10 }}>Cart Is Empty</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header