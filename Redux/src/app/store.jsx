import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/count/CounterSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})