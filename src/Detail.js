import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import styled from 'styled-components';



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

    //HTML 랜더링 이후 실행
    //이용시점: 
    //1.시간이 오래걸리는 연산, 2.서버에서 데이터 수신하는 경우,
    //3.타이머처리 등..
    
    // 마운트, 업데이트 될때마다, HTML 랜더링 이후 실행.
    useEffect(()=>{
        let timer = setTimeout(() => { setPurchageDCShow(false); }, 2000); //1000ms 후 코드실행
        console.log("useEffect")
        //클린업 함수라고 함
        //useEffect동작전 실행,
        //마운트때는 동작안함, 언마운트때 동작함 
        //예를들어 이 useEffect는 업데이트될때마다 타이머가 계속 생성되는 문제발생에 대하여 
        //클린업 함수를 이용해서 해결할 수있다.
        return () => {
            clearTimeout(timer); //기존 타이머 제거
            console.log("clean up function")
        }
    }); 

    // 마운트, count 값이 업데이트 될때마다 실행, 
    // let [Count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log("useEffect 실행");
    //     setTimeout(() => { setPurchageDCShow(false);}, 2000); //타이머 2000ms 후 코드실행
    // }, [Count]); 

    // 마운트때만 실행됨, 업데이트 될때는 실행안됨
    // useEffect(() => {
    //     let timerName = setTimeout(() => { setPurchageDCShow(false); }, 2000); //1000ms 후 코드실행
    // }, []);


    let [purchageDCShow, setPurchageDCShow] = useState(true);
    
    
    return (
        <div className="container">

                
                { purchageDCShow == true ? 
                    <div className="alert alert-warning">
                        2초이내 구매시 할인
                    </div>
                  : null
                }
            

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