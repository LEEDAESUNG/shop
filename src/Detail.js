import { useParams } from "react-router-dom";
import styled from 'styled-components';



// let YellowSimpleBtn = styled.button`
//     background : grey;
//     color : yellow
// `
// let YellowBtn = styled.button `
//     background : ${ props => props.bg };
//     color : ${ props => props.bg == 'skyblue' ? 'red' : 'black' };
//     padding : 10px;
// `
//  let NewBtn = styled.button(YellowBtn) `
//      border: 2px solid black;
//  `
// let Box = styled.div `
//     background : grey;
//     padding : 20px;
// `


function Detail(props) {
    
    let {id} = useParams();
    //console.log(id);
    
    return (
        <div className="container">

            {/* <Box>
                <YellowSimpleBtn>버튼</YellowSimpleBtn>
                <YellowBtn bg="skyblue">버튼</YellowBtn>
                <YellowBtn bg="orange">버튼</YellowBtn>
                <NewBtn>버튼</NewBtn>
            </Box>*/}

            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + (Number(id) + 1) + ".jpg" } width="100%" />
                </div>
                <div className="col-md-6">
                    {/* <h4 className="pt-5">props.shoes[0].title</h4>
                    <p>props.shoes[0].content</p>
                    <p>props.shoes[0].price 원</p>
                    <button className="btn btn-danger">주문하기</button> */}

                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price} 원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;