import React from 'react'
import { Link } from 'react-router-dom'

const NavigationMenu = () => {


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
        <ul className='menu-list'>
            {menuItems.map((item, index) => (
                <li key={index} className='menu-item'>
                    <Link to={item.to}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default NavigationMenu

