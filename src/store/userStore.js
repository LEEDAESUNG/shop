import { createSlice } from "@reduxjs/toolkit"

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
