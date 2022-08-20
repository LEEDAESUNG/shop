
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import 메인이미지 from './img/main-bg.jpg';
import data from './data.js'
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
//import { getDefaultNormalizer } from '@testing-library/react';
import Detail from "./Detail.js";
import axios from 'axios'

function App() {

    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate();
    let [dataURL, setDataURL] = useState("https://");
    let [moreCount, setMoreCount] = useState(0); //더보기버튼 횟수
    let maxMoreCount = 2;
    let [loading, setLoading] = useState(false);

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}

                        <Nav.Link href="/">Home</Nav.Link>
                        {/* <Nav.Link href="/detail">Detail</Nav.Link> */}
                        <Nav.Link onClick={() => { navigate('/detail') }}> Detail </Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>

                        {/* //페이지 이동 버튼 */}
                        {/* <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
            <Link to="/about">어바웃페이지</Link>  */}
                    </Nav>
                </Container>
            </Navbar>


            <div className="main-bg" style={{ backgroundImage: 'URL(' + 메인이미지 + ')' }} /> {/*src/img 이미지파일*/}
            <button onClick={() => {
                let copy = [...shoes];
                const comparator = (a, b) => a.title.localeCompare(b.title);
                copy = copy.sort(comparator)
                setShoes(copy);
            }} > 상품명 정렬</button>

            
            <Routes>
                <Route path="/" element={<div className="container"> <div className="row"> <Home shoes={shoes} /> </div></div>} />
                {/* <Route path="/detail" element={ <Detail shoes={shoes} /> } /> */}
                {/* <Route path="/detail/:id/:id2" element={<Detail shoes={shoes} />} /> */}
                {/* <Route path="/detail/:id/test/:id2" element={<Detail shoes={shoes} />} /> */}
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} /> {/* :id ==> 파라미터 */}

                {/* <Route path="/about" element={ <AboutPage /> } />
            <Route path="/about/member" element={<AboutPage />} />
            <Route path="/about/location" element={<AboutPage />} /> */}

                <Route path="/about" element={<AboutPage />} > {/* Nested Routes라고 함 */}
                    <Route path="member" element={<div> 멤버임</div>} /> {/* /about/member와 동일, AboutPage출력및 AboutPage내의 outlet부분에 출력 */}
                    <Route path="location" element={<div> 로케이션임</div>} /> {/* /about/location 동일, AboutPage출력및 AboutPage내의 outlet부분에 출력 */}
                </Route>

                <Route path="/event" element={<EventPage />} > {/* Nested Routes라고 함 */}
                    <Route path="one" element={<div> 첫 주문시 양배추즙 서비스</div>} />
                    <Route path="two" element={<div> 생일기념 쿠폰받기</div>} />
                </Route>

                <Route path="*" element={<div>없는 페이지(404)</div>} /> {/* 그 외 모든 라우트 */}
            </Routes>


            {/*<div className="container">
        <div className="row"> */}

            { /*url 이미지파일
          <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" /> 
            <h4> { shoes[0].title } </h4>
            <p> {shoes[0].price} </p>
          </div>*/}

            { /*public내 이미지파일
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/logo192.png'} width="80%" /> 
            <h4> {shoes[1].title} </h4>
            <p> {shoes[1].price} </p>
          </div>*/}

            { /*URL 이미지파일
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" /> 
            <h4> {shoes[2].title} </h4>
            <p> {shoes[2].price} </p>
          </div> */}

            {/* {
            shoes.map(function (a, i) {
              return (
                <div className="col-md-4" key={i}>
                  <Card shoes={shoes[i]} />
                </div>
              )
            })
          } */}

            {/*  </div>
      </div>*/}

            {
                (moreCount < maxMoreCount) ?
                    < button onClick={() => {

                        setLoading(true);//로딩중 메세지...

                        moreCount++;
                        setMoreCount(moreCount);
                        if (moreCount == 1) {
                            dataURL = 'https://codingapple1.github.io/shop/data2.json';
                        }
                        else if (moreCount == 2) {
                            dataURL = 'https://codingapple1.github.io/shop/data3.json';
                        }
                        else {
                            dataURL = "";
                            console.log("더보기 없음")
                        }
                        setDataURL(dataURL);

                        if (dataURL.length > 0) {
                            axios.get(dataURL)
                                .then((결과) => {
                                    // let copy = [...shoes]
                                    // copy.push(...결과.data)
                                    let copy = [...shoes, ...결과.data]
                                    setShoes(copy)
                                    setLoading(false);//로딩중 메세지 제거
                                })
                                .catch(() => {
                                    console.log("실패함")
                                    setLoading(false);//로딩중 메세지 제거
                                })


                            /* axios.post('https://url1', {name:'kim'}) //json형식으로 데이터 전송하는 방법 */

                            /* Promise.all(() => { [axios.get('https://url1'), axios.get('https://url2')]
                              .then(()=>{ console.log("여러 url 데이터 가져오기 모두 성공할때") })
                                })
                              .catch(() => {
                               console.log("여러 url 데이터 가져오기 하나라도 실패할때")
                                }) */

                            /* fetch('https://url1')
                            .then(결과=>결과.json()) //json형태 수신데이터를 array/oject로 변환
                            .then(data=>{}) */
                        }
                    }}> {(moreCount < maxMoreCount) ? "더보기" : "더보기없음"} </button >
                    : null
            }

            {
                loading == true ? < div > 로딩중입니다</div> : null
            }

        </div>
    );
}

function Home(props) {


    {/* <TitleSort /> */}
    <div> 테스트 </div>

    return (
        
        
        props.shoes.map(function (a, i) {
            return (
                <>
                    <div className="col-md-4" key={i}>
                        <Card shoes={props.shoes[i]} />
                    </div>
                </>
            )
        })
    );
}
function TitleSort()
{
    return (
        <div>
            <button> 상품명 정렬</button>
        </div>
    );
}
function Card(props) {
    return (
        <>
            <Link to={"/detail/" + (Number(props.shoes.id))}>
                {/* <img src={props.shoes.url} width="80%" /> */}
                <img src={"https://codingapple1.github.io/shop/shoes" + (Number(props.shoes.id) + 1) + ".jpg"} width="80%" />
                <h4> {props.shoes.title} </h4>
                <p> {props.shoes.price} </p>
            </Link>
        </>
    );
}



function AboutPage() {
    return (
        <div>
            어바웃페이지
            <Outlet></Outlet>
        </div>
    );
}

function EventPage() {
    return (
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div>
    )
}

export default App;

