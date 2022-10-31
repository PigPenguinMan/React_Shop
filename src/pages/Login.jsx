// 리액트 부트스트랩 - form -overview
import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';

const Login = () => {
    const [name , setName] = useState("");
    const {action} = useContext(DataContext)
    const navigate = useNavigate();
    const loginUser = ()=>{
        // 컨텍스트에서 action을 들고옴 
        action.setUser({name :name, profile:null ,likelist :[]})
        navigate('/');  
    }
    return (
        <div>
            {/* submit이기 때문에 onSubmit사용 */}
            <Form className='m-5' onSubmit={loginUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID </Form.Label>
                    <Form.Control type="text" placeholder="ID를 입력해주세요" 
                    onChange={(e)=>{setName(e.target.value)}} />
                    {/* value값을 setName에 저장 */}
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="outline-dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Login;