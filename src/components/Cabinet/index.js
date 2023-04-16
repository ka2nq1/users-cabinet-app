import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import NavigationMenu from './NavigationMenu';
import Orders from './Orders';
import Products from './Products';

const Cabinet = () => {
    return (
        <Row className='justify-content-between'> 
            <Col md={2}>
                <NavigationMenu/>
            </Col>
            <Col md={9}>
                <Routes>
                    <Route path="/" element={<Navigate to="/orders" />} />
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/products' element={<Products/>}/>
                </Routes>
            </Col>
        </Row>
    )
};

export default Cabinet