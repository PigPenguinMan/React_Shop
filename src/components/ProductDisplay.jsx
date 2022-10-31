import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
const ProductDisplay = (props) => {
    const { product } = props;
    const [index,setIndex] = useState(0);
    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <img src={require(`../img/${product.productPicture[index]}`)} alt="" />
                    </div>
                </Col>
                <Col>
                    <div>
                        <h1>{product.productName}</h1>
                        <p>{product.detail}</p>
                        <p>색상 설명</p>
                        <div>
                            {
                                // productColor에 있는 color 값을 백그라운드로 사용
                                product.productColor.map((color,i) => (
                                    <div className="m-2" style={{
                                        display: "inline-block",
                                        width: "20px",
                                        height: "20px",
                                        backgroundColor: color
                                    }}onMouseEnter={()=>{setIndex(i)}} ></div>
                                ))
                            }
                        </div>
                        <div className="d-grid gap-2">
                            <Button variant="outline-dark" size="lg">
                                구매하기
                            </Button><Button variant="primary" size="lg">
                                장바구니
                            </Button><Button variant="primary" size="lg">
                                찜하기
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDisplay;