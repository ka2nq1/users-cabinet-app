import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';

const Layout = ({children}) => {
    return (
        <Container fluid>
            <Header/>
            {children}
        </Container>
    )
}

export default Layout;