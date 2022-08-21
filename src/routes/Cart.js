
import {Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {

    let alldata = useSelector((state) => { return state })
    let user = useSelector((state) => { return state.user })
    let stock = useSelector((state) => { return state.stock })
    let cart = useSelector((state) => state.cartdata )
    console.log(cart);

    return(
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
                <tr>
                    <td>{cart[0].id}</td>
                    <td>{cart[0].name}</td>
                    <td>{cart[0].count}</td>
                    <td><button>+</button><button>-</button></td>
                </tr>
                <tr>
                    <td>{cart[1].id}</td>
                    <td>{cart[1].name}</td>
                    <td>{cart[1].count}</td>
                    <td><button>+</button><button>-</button></td>
                </tr>
            </tbody>
        </Table> 
    )
}

export default Cart