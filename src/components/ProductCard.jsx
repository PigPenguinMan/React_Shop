import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as ActiveHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as disactiveHeart } from '@fortawesome/free-regular-svg-icons'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCardComp = (props) => {
    const { product } = props;
    // 데이터 컨텍스트를 useContext로 들고옴
    const data = useContext(DataContext);
    const [likeCheck, SetLikeCheck] = useState(false)
    const navigate = useNavigate();
    // 로그아웃 되었을떄 likeCheck를 false로 만들기 
    // data.state.user의 값을 확인해서 업데이트 
    useEffect(()=>{
        if(!data.state.user ){
            SetLikeCheck(false)
        };
    },[data.state.user]); // data.state.user의 값이 바뀔때마다 useEffect실행

    // 버튼을 클릭했을 떄 , 로그인이 되어있다면 , 유저의 likelist에 추가하기 
    // 토글기능 (한번 누르면 추가 ,선택된 상황에서 누르면 햐재)
    const toggleLike = () => {
        if (!data.state.user) {
            return; // 함수를 끝냄 
        }

        // like가 선택 되어있는지 확인 
        // data.state.user.likelist[?].prodictId  > 배열안에 상품의 id가 있다면 선택된것을 알수있다 
        // find : 조건이 참일때 하나의 값을 반환 , 없을떄는 undefind
        // 같이 있다면 값을 제거 (filter), 값이 없다면 값을 추가 (concat)
        const likes = data.state.user.likelist;
        // likelist의 like중에서 아이디가 같은 것이 있다면 
        if (likes.find((like) => (like.productId == product.productId))) {
            // 같은 값이 있다면 제거(삭제)
            const newLikeList = likes.filter((like) => (like.productId != product.productId))
            // user의 값이 객체이므로 이전의 값이 사라지지않게 ... data.state.user를 통해 저장
            data.action.setUser({
                ...data.state.user,
                likelist: newLikeList
            })
            SetLikeCheck(false);
        } else {
            // 값이 없을때 , likeList를 추가하는 내용
            // like(객체)를 만들어서 물건Id와 물건이름 추가 
            const like = {
                productId: product.productId,
                productName: product.productName
            }
            // like가 추가된 새로운 배열 생성 
            const newLikeList = likes.concat(like)

            data.action.setUser({
                ...data.state.user,
                likelist: newLikeList
            })
            SetLikeCheck(true);
        };
        
    }
    return (
        <div>
            <Card style={{ width: '15rem' }}>
                {/* 이미지를 들고올때 변수 사용시 require 사용  */}
                <Card.Img 
                onClick={()=>{navigate('/product/'+product.productId)}}
                variant="top" src={require(`../img/${product.productPicture[0]}`)} />
                <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Button variant="outline-dark" onClick={toggleLike}>
                        <FontAwesomeIcon icon={likeCheck ? ActiveHeart : disactiveHeart} />
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCardComp;