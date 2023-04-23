import { SET_FILTER } from "../../constants/Products";

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});