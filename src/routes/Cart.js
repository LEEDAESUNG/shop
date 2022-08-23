
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeStock, plusCount, minusCount} from './../Store.js';
import { changeName, increaseAge } from './../store/userStore.js'

function Cart() {

    //redux(createSlice)에서 선언한 변수 사용할 때.
    let state = useSelector((state) => { return state })
    let user = useSelector((state) => { return state.user })
    let stock = useSelector((state) => { return state.stock })
    let cart = useSelector((state) => state.cartdata )
    let dispatch = useDispatch(); //store.js으로 요청을 보내주는 함수
    console.log(state);

    return(
        <div>
            {state.user.name} {state.user.age}의 위시리스트
            <button onClick={() => { dispatch(increaseAge(10)) }}>버튼</button>

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
                    cart.map((a,i)=>
                        <tr key={i}>
                            <td>{cart[i].id}</td>
                            <td>{cart[i].name}</td>
                            <td>{cart[i].count}</td>
                            {/* <td><button onClick={() => { dispatch(changeName()) }}>+</button></td> */}
                            {/* <td><button onClick={() => { dispatch(changeStock()) }}>+</button></td> */}
                            <td><button onClick={() => { dispatch(plusCount()) }}>+</button><button onClick={() => { dispatch(minusCount()) }}>-</button></td>
                            
                        </tr>
                    )
                    
                }
                    
                </tbody>
            </Table>
        </div> 
    )
}

export default Cart