import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProductAsync = createAsyncThunk(
    'getPoduct',
    async (info, {dispatch}) => {
        const response = await axios.get('https://fakestoreapi.com/products/')
        const data = await response.data
        dispatch(getProducts(data))
    }
)



const mainSlice = createSlice({
    name:'mainSlice',
    initialState:{
        main:[]
    },
    reducers:{
        getProducts: (state, action) => {
            state.main = action.payload
        }
    }
})
export const {getProducts} = mainSlice.actions
export default mainSlice.reducer