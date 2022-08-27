
import { configureStore, createSlice } from '@reduxjs/toolkit'
//import cart from './store/cartStore.js'


let cart = createSlice({
    name: 'cartdata',
    initialState:
        [
            { id: 0, name: 'White and Black', count: 2 },
            { id: 2, name: 'Grey Yordan', count: 1 }
        ],
    reducers: {
        addCount(state) {
            //return (state[0].count + 1)
            state[0].count++
        },
        minusCount(state) {
            //return (state[0].count - 1)
            state[0].count--
        }
    }
})
export let { addCount, minusCount } = cart.actions //cart의 오브젝트를 왼쪽변수명으로 바꾸는 문법


let user = createSlice({
    name: 'user',
    initialState: { name: 'kim', age: 30 },
    reducers: {
        changeName(state) {
            //return 'John ' + state
            //return { name: 'park', age: 30 }
            state.name = 'park' //object/array의 경우 직접수정하면 state변경됨
        },

        // increaseAge(state) { //파라미터 값없이 함수호출
        //     state.age += 1 //object/array의 경우 직접수정하면 state변경됨
        // }

        increaseAge(state, action) { //파라미터 값과 함께 함수호출
            state.age = state.age + action.payload //object/array의 경우 직접수정하면 state변경됨
        }
    }
})
export let { changeName, increaseAge } = user.actions

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


export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cart: cart.reducer
    }
}) 

