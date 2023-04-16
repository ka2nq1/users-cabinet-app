import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavigationMenu = () => {
    const location = useLocation();

    const menuItems = [
        {
            name: "Orders",
            to: '/orders'
        },
        {
            name: "Products",
            to: '/products'
        },
    ]

    return (
        <Nav fill variant="pills" className='flex-column gap-2'>
            {menuItems.map((item, index) => (
                <Nav.Item key={index} className='menu-item'>
                    <Nav.Link 
                        as={Link}
                        to={item.to}
                        active={location.pathname === item.to} 
                    >
                        {item.name}
                    </Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    )
}

export default NavigationMenu

