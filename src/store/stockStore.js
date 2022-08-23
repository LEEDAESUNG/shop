import { createSlice } from "@reduxjs/toolkit"


let stock = createSlice({
    name: 'stock',
    initialState: [10, 20, 30],
    reducers: {
        changeStock(state) {
            return state[0]
        }
    }
})
export let { changeStock } = stock.actions
