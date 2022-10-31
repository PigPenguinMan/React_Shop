import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { useEffect } from 'react';

const NavBarComp = () => {
    // 로그인 데이터 기본값 :true
    const [login, setLogin] = useState(true);
    // useContext 이해안됨 다시보기 
    const data = useContext(DataContext);
    // 네비게이터
    const navigate = useNavigate();

    // 컴포넌트가 마운트 되자마자 로그인정보 확인 
    useEffect(() => {
        setLogin(data.state.user ? true : false)
    },[data.state.user]) // 새로 로그인을 했을때 화면이 바뀌게 설정 

    // Logout을 위한 이벤트 함수 
    const logOut = () => {
        setLogin(false);  // 컴포넌트를 바꿔주기 위해 수정
        // user의 값을 null로 바꿔줌 
        data.action.setUser(null);
        // 다른곳에서 로그아웃을 해도 항상 홈으로 돌아감
        navigate("/")
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><FontAwesomeIcon icon={faShop} />{'   '}SHOP</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* 클래스네임으로 부트스트랩 Css를 적용시킴  */}
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        {/* 삼항연산자로 로그인 되었을때 되지않았을때를 구분 */}
                        {login ? (
                            <Nav>
                                {/* 로그인 되었을때 출력될 컴포넌트 */}
                                <NavLink className="nav-link" to='/mypage' style={{ color: "white" }}>{data.state.user.name}님의 MyPage
                                </NavLink>
                                <Button variant="outline-light" onClick={ logOut }>Logout</Button>{' '}
                            </Nav>
                        ) : (
                            <Nav>
                                {/* 로그인이 되지않았을때 출력될 컴포넌트 */}
                                <Button variant="outline-light" onClick={()=>{navigate('/loginform')}}>Login</Button>{' '}
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarComp;