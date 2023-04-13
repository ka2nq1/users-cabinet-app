import { DELETE_PRODUCT, SET_PRODUCTS } from "../../constants/Products";

export const getProducts = () => (
    dispatch => (
            Api.fetchProducts().then(response => {
                    dispatch(setProducts(response.data));
                    return response;
                }
            )
        )
    );

const setProducts = (payload) => ({ 
    type: SET_PRODUCTS, 
    payload 
});

export const deleteProduct = (productId) => ({
    type: DELETE_PRODUCT,
    payload: productId,
  });