import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_FILTER } from "../../../constants/Products";
import { setFilter } from '../../../store/actions/Products';

const ProductFilter = () => {
    const dispatch = useDispatch();

    const { productsList, filterBy } = useSelector(state => state.products);
    const types = Array.from(new Set(productsList.map(product => product.type)));

    const handleFilterChange = (event) => {
        dispatch(setFilter(event.target.value));
    };


    return (
        <Form>
            <Form.Label className="mr-sm-2">Filter by type:</Form.Label>
            <FormControl
                as="select"
                className="mr-sm-2"
                value={filterBy}
                onChange={handleFilterChange}
            >
                <option value={DEFAULT_FILTER}>All</option>
                {types.map((type, index) => (
                    <option key={index} value={type}>
                        {type}
                    </option>
                ))}
            </FormControl>
        </Form>
    );
};

export default ProductFilter;
