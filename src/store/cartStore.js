import { createSlice, configureStore } from "@reduxjs/toolkit"

let cart = createSlice({
    name: 'cart',
    initialState:
        [
            { id: 0, name: 'White and Black', count: 2 },
            { id: 2, name: 'Grey Yordan', count: 1 }
        ],
    reducers: {
        addCount(state, action) {
            //return (state[action].count + 1)
            //console.log(action)
            //return action
            state[0].count++
        },
        minusCount(state, action) {
            //return (state[action].count - 1)
            state[0].count--
        }
    }
})
export let { addCount, minusCount } = cart.actions //cartdata의 오브젝트를 왼쪽변수명으로 바꾸는 문법

export default configureStore({
    reducer: {
        cart: cart.reducer
    }
})
