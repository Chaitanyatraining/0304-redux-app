import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState:{
        data:[]
    },
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            console.log(action)
            state.data = action.payload 
        })
    }
})

export const {setProducts} = productSlice.actions
export default productSlice.reducer

export const fetchProducts = createAsyncThunk('products/fetch', async() => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
})