import React from 'react';
import Clock from './Clock';
import SessionCounter from './SessionCounter';

const Header = () => {
    return (
        <>
            <Clock/>
            <SessionCounter/>
        </>
    )
}

export default Header;