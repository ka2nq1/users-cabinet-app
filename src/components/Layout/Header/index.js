import React from 'react';
import { HeaderStyles } from '../../../styles/HeaderStyles';
import CurrentDate from './CurrentDate';
import SessionCounter from './SessionCounter';

const Header = () => {
    return (
        <HeaderStyles>
            <div className='right-wrap'>
                <CurrentDate/>
                <SessionCounter/>
            </div>
        </HeaderStyles>
    )
}

export default Header;