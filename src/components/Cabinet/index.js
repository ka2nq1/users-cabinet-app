import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import Layout from '../Layout';
import NavigationMenu from './NavigationMenu';
import Orders from './Orders';
import Products from './Products';

const Cabinet = () => {
    return (
        <Layout>
            <NavigationMenu/>
            <Routes>
                <Route path="/" element={<Navigate to="/orders" />} />
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/products' element={<Products/>}/>
            </Routes>
        </Layout>
    )
};

export default Cabinet