import { SET_FILTER, DEFAULT_FILTER } from "../../constants/Products";

const initialState = {
    productsList: [
        {
            id: 1,
            serialNumber: 1234,
            isNew: 1,
            photo: 'pathToFile.jpg',
            title: 'Product 1',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33'
            },
            price: [
                { value: 100, symbol: 'USD', isDefault: 0 },
                { value: 2600, symbol: 'UAH', isDefault: 1 }
            ],
            order: 1,
            date: '2017-06-29 12:09:33'
        },
        {
            id: 2,
            serialNumber: 1235,
            isNew: 1,
            photo: 'pathToFile.jpg',
            title: 'Product 2',
            type: 'Phones',
            specification: 'Specification 1',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33'
            },
            price: [
                { value: 100, symbol: 'USD', isDefault: 0 },
                { value: 2600, symbol: 'UAH', isDefault: 1 }
            ],
            order: 2,
            date: '2017-06-29 12:09:33'
        },
        {
            id: 3,
            serialNumber: 1236,
            isNew: 1,
            photo: 'pathToFile.jpg',
            title: 'Product 3',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33'
            },
            price: [
                { value: 100, symbol: 'USD', isDefault: 0 },
                { value: 2600, symbol: 'UAH', isDefault: 1 }
            ],
            order: 2,
            date: '2017-06-29 12:09:33'
        }
    ],
    filteredProducts: [],
    filterBy: DEFAULT_FILTER
};

export default (state = initialState, action) => {
    switch (action?.type) {
        case SET_FILTER:
            const filtered = state.productsList.filter(product => product.type === action.payload);
            return {
                ...state,
                filteredProducts: filtered,
                filterBy: action.payload
            }
        default:
            return state;
    }
};
