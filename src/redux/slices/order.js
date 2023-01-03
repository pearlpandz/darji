import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    "gender": "", // ["male", "female"]
    "orderType": "", //["shirt", "pant", "jacket", "suit"]
    "designType": "", //["i know my design","design by myself"]
    "reference": [],  // upload from user device and will store in different table
    "measurements": null,
    "measurementAddress": "",
    "cloth_couriered": false, // if this true, we no need to store any other information related to cloth
    "cloth_pickuplocation": "", // if this empty, we have to store cloth info
    "cloth_length": 0,
    "cloth_total_price": 0,
    "cloth_id": 0,
    "orderedDesign": null, // it's common for any kind of dress shirt/pant/skirt/suit/coat/t-shirt and etc.,
    "deliveryAddress": "",
    "totalPrice": 0,
    "alreadyPaid": 0
};

export const orderSlice = createSlice({
    name: 'Order Slice',
    initialState: {...INITIAL_STATE},  // entire order intial state object should be here
    reducers: {
        updateOrder: (state, action) => {
            const keys = Object.keys(action.payload);
            keys.forEach((key) => {
                state[key] = action.payload[key]
            });
        },
        resetOrder: (state, action) => {
            state = {...INITIAL_STATE}
            return state;
        }
    }
});

const { actions, reducer } = orderSlice;
export const { updateOrder, resetOrder } = actions;
export default reducer;