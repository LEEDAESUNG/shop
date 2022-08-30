
import { configureStore, createSlice } from '@reduxjs/toolkit'
//import cart from './store/cartStore.js'


let cart = createSlice({
    name: 'cartdata',
    initialState:
        [
            // { id: '0', name: 'White and Black', count: 2 },
            // { id: '2', name: 'Grey Yordan', count: 1 }
        ],
    reducers: {
        addItem(state, action) {
            //state.push(action.payload)
            let index = state.findIndex((element) => { return element.id === action.payload.id })
            if (index < 0)
                state.push(action.payload)
            else
                state[index].count++
        },
        delItem(state, action) {
            let index = state.findIndex((element) => { return element.id === action.payload })
            if(index>=0) 
                state.pop(index)
        },
        minusCount(state) {
            state[0].count--
        },
        addCount(state, action) {
            let index = state.findIndex((element) => { return element.id === action.payload} )
            if (index>=0)
                state[index].count++
            else
                console.log(index + ":해당 아이템 없습니다.")
        }
    }
})
export let { addCount, minusCount, addItem, delItem } = cart.actions //cart의 오브젝트를 왼쪽변수명으로 바꾸는 문법


let user = createSlice({
    name: 'user',
    //initialState: 'kim',
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

