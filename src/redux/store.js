import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./slices/order";

export default configureStore({
    reducer: {
        orders: orderSlice
    }
});