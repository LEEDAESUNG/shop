
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import 메인이미지 from './img/main-bg.jpg';
import data from './data.js'
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { getDefaultNormalizer } from '@testing-library/react';
import DetailPage from "./Detail.js";

function App() {

  let [shoes] = useState(data);

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
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            {/* //페이지 이동 버튼 */}
            {/* <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
            <Link to="/about">어바웃페이지</Link>  */}
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{ backgroundImage: 'URL(' + 메인이미지 + ')' }} /> {/*src/img 이미지파일*/}


          <Routes>
            <Route path="/" element={ Home(shoes={shoes}) } />
            <Route path="/detail" element={ <DetailPage shoes={shoes} /> } />
            <Route path="/about" element={ <AboutPage /> } />
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

    <div className="container">
      <div className="row"> 
    props.shoes.map(function (a, i) {
          return (
            <div className="col-md-4" key={i}>
              <Card shoes={props.shoes[i]} />
            </div>
          )
        })
        
      </div></div>

      
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
    </div>
  );
}

export default App;

