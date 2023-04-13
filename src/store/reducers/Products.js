import { DELETE_PRODUCT, SET_PRODUCTS } from "../../constants/Products";

const initialState = {
    products: [],
};

const products = (state = initialState, action) => {
    switch (action?.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.payload };

        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== action.payload
                ),
            };
    }
};

export default products;
