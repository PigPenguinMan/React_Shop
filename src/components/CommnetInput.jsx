import { Button, Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState,useContext } from 'react';
import DataContext from '../context/DataContext';
import { useParams } from 'react-router-dom';
const CommentInput = (props) => {
    const { id } = useParams();
    const [textInput,setTextInput] = useState("");
    const {action , state} = useContext(DataContext)

    // 버튼을 눌렀을때 코멘트추가 
    const addComment = () => {
        //  새로운 코멘트 객체 생성
        const comment = {
            commentId : state.commentCount , // 계속해서 증가해야하는 값  
            productId : id, // 현재 id값을 가져오기 : param값 > 부모로부터 받아오기 
            name : (state.user ? state.user.name : "ㅇㅇ"), // user를 통해 받아옴 . 단 user의 값이 null일 경우 빈값
            text : textInput // textInput를 넣어줌 
        }
        //  새로운 코멘트 객체를 state의  allcomment에 연결 
        action.setAllComment(
            [...state.allComments.concat(comment) ]
            )
        action.setCommnetCount(state.commentCount+1)
       
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={10} className="d-grid gap-2">
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                onChange={(e)=>{setTextInput(e.target.value)}}
                            />
                        </FloatingLabel></Col>
                    <Col xs={2} className="d-grid gap-2">
                        <Button variant='primary' onClick={addComment}>입력</Button>
                    </Col>
                </Row>
            </Container>



        </div>
    );
}

export default CommentInput;