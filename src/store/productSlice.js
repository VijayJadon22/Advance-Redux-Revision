import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    return data;
})

export const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        // setProducts: (state, action) => {
        //     state.data = action.payload;
        // },

        // setStatus: (state, action) => {
        //     state.status = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = STATUSES.ERROR;
            })
    }
});

export default productSlice.reducer;