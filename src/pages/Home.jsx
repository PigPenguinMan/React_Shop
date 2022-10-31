// 슬릭 라이브러리 추가 
import {  Container } from "react-bootstrap";
import Slider from "react-slick";
import  Col  from "react-bootstrap/Col";
import  Row  from "react-bootstrap/Row";

import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome' 
import {faChevronRight,faChevronLeft}  from '@fortawesome/free-solid-svg-icons' 
import ProductCardComp from "../components/ProductCard";
import { useContext } from "react";
import DataContext from "../context/DataContext";



const Home = () => {
    // 슬릭 슬라이더 세팅 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrowComp />,
        prevArrow: <PrevArrowComp />
    };

    const {state} =useContext(DataContext);

    return (
        <div>
            <Container>
                <Row >
                    <Col className="px-5">
                        <Slider {...settings}>
                            {state.productList.map((product)=>(
                                <div>
                                    <ProductCardComp key={product.productId} product={product} />
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Home;



function NextArrowComp(props) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon icon={faChevronRight} 
        className={className}
        onClick={onClick}
        style={{color:"dimgray "}}/>
    );
  }
  
  function PrevArrowComp(props) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon icon={faChevronLeft} 
        className={className}
        onClick={onClick}
        style={{color:"dimgray"}}/>
    );
  }