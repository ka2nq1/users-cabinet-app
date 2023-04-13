import { configureStore } from '@reduxjs/toolkit'
import combineReducers from './reducers';

const store = configureStore({
    reducer: combineReducers,
    // middleware: applyMiddleware(thunkMiddleware)
});

export default store;