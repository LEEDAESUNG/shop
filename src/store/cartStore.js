import { createSlice } from "@reduxjs/toolkit"

let cartdata = createSlice({
    name: 'cartdata',
    initialState:
        [
            { id: 0, name: 'White and Black', count: 2 },
            { id: 2, name: 'Grey Yordan', count: 1 }
        ],
    reducer: {
        plusCount(state) {
            return (state[0].count + 1)
        },
        minusCount(state) {
            return (state[0].count - 1)
        }
    }
})
export let { plusCount, minusCount } = cartdata.actions //cartdata의 오브젝트를 왼쪽변수명으로 바꾸는 문법
