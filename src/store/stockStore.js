import { createSlice, configureStore } from "@reduxjs/toolkit"


let stock = createSlice({
    name: 'stock',
    initialState: [10, 20, 30],
    reducers: {
        changeStock(state) {
            return state[0]
        }
    }
})
export let { changeStock } = stock.actions //cartdata의 오브젝트를 왼쪽변수명으로 바꾸는 문법

export default configureStore({
    reducer: {
        stock: stock.reducer,
    }
})

