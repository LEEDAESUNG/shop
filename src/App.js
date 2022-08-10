
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import 메인이미지 from './img/main-bg.jpg';
import data from './data.js'
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { getDefaultNormalizer } from '@testing-library/react';
import Detail from "./Detail.js";

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

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
        // console.log("before sort: ");
        // console.log(shoes);
        //copy.sort(); 
        const comparator = (a, b) => a.title.localeCompare(b.title);
        copy = copy.sort(comparator)
        setShoes(copy);
        // console.log("after sort: ");
        // console.log(copy.sort(comparator));
      }} > 상품명 정렬</button>

          <Routes>
            <Route path="/" element={<div className="container"> <div className="row"> <Home shoes={shoes} /> </div></div> } />
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
            
            <Route path="*" element={<div>없는 페이지(404)</div>} />
          </Routes>



      {/* <div className="main-bg" style={{ backgroundImage: 'URL(' + 메인이미지 + ')' }} /> {/*src/img 이미지파일*/}

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

    </div>
  );
}

function Home(props) {
  

  return (


        props.shoes.map(function (a, i) {
              return (
                <div className="col-md-4" key={i}>
                  <Card shoes={props.shoes[i]} />
                </div>
              )
            })
            
    
  );

    
}
function Card(props) {
  return (
    <>
      <img src={props.shoes.url} width="80%" />
      <h4> {props.shoes.title} </h4>
      <p> {props.shoes.price} </p>
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

