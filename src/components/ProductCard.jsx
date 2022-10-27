import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart as ActiveHeart} from '@fortawesome/free-solid-svg-icons'
import {faHeart as disactiveHeart} from '@fortawesome/free-regular-svg-icons'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const ProductCardComp = (props) => {
    
    const {product} = props;

    return (
        <div>
            <Card style={{ width: '15rem' }}>
                {/* 이미지를 들고올때 변수 사용시 require 사용  */}
                <Card.Img variant="top" src={require(`../img/${product.productPicture}`)} />
                <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Button variant="outline-dark">
                    <FontAwesomeIcon icon={disactiveHeart} />
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCardComp;