import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProductFilter from './ProductFilter';

const Products = () => {
    const { filteredProducts, productsList } = useSelector(state => state.products);

    const products = !!filteredProducts.length ? filteredProducts : productsList;

    return (
        <>
            <h1>Products</h1>
            <ProductFilter/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Название продукта</th>
                        <th>Тип продукта</th>
                        <th>Гарантия</th>
                        <th>Цена</th>
                        <th>Название прихода</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.title}</td>
                            <td>{product.type}</td>
                            <td>
                                {new Date(product.guarantee.start).toLocaleDateString()}<br/>
                                {new Date(product.guarantee.end).toLocaleDateString()}
                            </td>
                            <td>
                                {product.price.find((p) => p.symbol === 'USD').value}<br/>
                                {product.price.find((p) => p.symbol === 'UAH').value}<br/>
                            </td>
                            <td>{product.order}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
};

export default Products