
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
//import { changeStock, addCount, minusCount, increaseAge } from './../Store.js';
import { addCount, delItem } from './../Store.js';


function Cart() {

    //redux(createSlice)에서 선언한 변수 사용할 때.
    let state = useSelector((state) => { return state })

    // let user = useSelector((state) => { return state.user })
    // let stock = useSelector((state) => { return state.stock })
    //let cart = useSelector((state) => state.cart )
    let dispatch = useDispatch(); //store.js으로 요청을 보내주는 함수
    //console.log(state);

    return(
        <div>
            {/* {state.user.name} {state.user.age}의 위시리스트
            <button onClick={() => { dispatch(increaseAge(10)) }}>버튼</button> */}
            {/* {console.log(state.cart) } */}

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                {
                    state.cart.map((a,i)=>
                        <tr key={i}>
                            <td>{state.cart[i].id}</td>
                            <td>{state.cart[i].name}</td>
                            <td>{state.cart[i].count}</td>
                            {/* <td><button onClick={() => { dispatch(changeName()) }}>+</button></td> */}
                            {/* <td><button onClick={() => { dispatch(changeStock()) }}>+</button></td> */}
                            <td><button onClick={() => { dispatch(addCount(state.cart[i].id)) }}>+</button> 
                                <button onClick={() => { dispatch(delItem(state.cart[i].id)) }}>삭제</button></td>
                        </tr>
                    )
                }

                </tbody>
            </Table>
        </div> 
    )
}

export default Cart