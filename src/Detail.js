import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import styled from 'styled-components';
import { Nav, Tab } from "react-bootstrap";


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
        //2초 이내 구매시 할인
        let timer = setTimeout(() => { setPurchageDCShow(false); }, 2000); //1000ms 후 코드실행
        console.log("useEffect run[timer]")
        //클린업 함수라고 함
        //useEffect동작전 실행,
        //마운트때는 동작안함, 언마운트때 동작함 
        //예를들어 이 useEffect는 업데이트될때마다 타이머가 계속 생성되는 문제발생에 대하여 
        //클린업 함수를 이용해서 해결할 수있다.
        return () => {
            clearTimeout(timer); //기존 타이머 제거
            console.log("useEffect clean up[timer]")
        }
    },[]); 


    //이미지
    let [imageShoes, setImageShoes] = useState('');
    useEffect(()=>{
        let imgTimer = setTimeout(() => { setImageShoes('end'); }, 100);
        return ()=>{clearTimeout(imgTimer);}
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

    let [message, setMessage] = useState("");
    useEffect(()=>{
        let msgTimer = setTimeout(()=> { setMessage("");}, 2000)
        console.log("useEffect run[msgTimer]")
        return () => {
            clearTimeout(msgTimer);
            //console.log("clean up function:msgTimer");
            console.log("useEffect clean up[msgTimer]")
        }
    }, [message]);
    let [purchageDCShow, setPurchageDCShow] = useState(true);
    let [money, setMoney] = useState("");
    let [탭, 탭변경] = useState(0);

    // const onChangeMoney = (e) => {
    //     let num = e.target.value.replace(/[^0-9]/g, "")
    //     setMoney(num);
    // };

    function onChangeMoney(e){
        let num = e.target.value.replace(/[^0-9]/g, "") //숫자만
        setMoney(num);
        if (e.target.value.length != num.length) {
            setMessage("숫자만 입력하세요")
        }
    }
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
                <div> {message} </div>
                <input onChange={ onChangeMoney } value = {money} maxLength="20" ></input>
                <div className="col-md-6">

                    {/* <img src={"https://codingapple1.github.io/shop/shoes" + (Number(id) + 1) + ".jpg" } width="100%" /> */}
                    <div className={'start ' + imageShoes}> {/*fade in 효과 */}
                        <img src={"https://codingapple1.github.io/shop/shoes" + (Number(id) + 1) + ".jpg"} width="100%" />
                    </div>
                    
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

            <Nav fill variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => {탭변경(0)}}>내용1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => { 탭변경(1) }}>내용2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => { 탭변경(2) }}>내용3</Nav.Link>
                </Nav.Item>
            </Nav>
            
            {/* {
                탭 == 0 ? <div>내용1</div> : null
            }
            {
                탭 == 1 ? <div>내용2</div> : null
            }
            {
                탭 == 2 ? <div>내용3</div> : null
            } */}

            <TabContent shoes={props.shoes} id={id} 탭={탭} />
        </div>
    );
}

// function TabContent(props) {
//     if (props.탭 == 0) return <div>내용1</div>
//     if (props.탭 == 1) return <div>내용2</div>
//     if (props.탭 == 2) return <div>내용3</div>
//
//    return [<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][props.탭]
// }

// function TabContent({탭}) {
//     if (탭 == 0) return <div>내용1</div>
//     if (탭 == 1) return <div>내용2</div>
//     if (탭 == 2) return <div>내용3</div>
// }

function TabContent({ shoes, id, 탭 }) {
    let [fade, setFade] = useState('');
    useEffect(() => {
        let timerFadein = setTimeout(() => { setFade('end'); }, 100); //타이머 100ms 후 setFade('end')실행
        return () => {
            clearTimeout(timerFadein);
            setFade('');
        }
    }, [탭]);

    return (
        <div className={'start ' + fade}>{/*fade in 효과 */}
            {[<div> {shoes[Number(id)].title} </div>, <div> {shoes[Number(id)].content} </div>, <div> {shoes[Number(id)].price} </div>][탭]}
        </div>
    )
}

export default Detail;