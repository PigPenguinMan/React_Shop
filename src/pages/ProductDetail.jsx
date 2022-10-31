import Comment from "../components/Commnet";
import CommentInput from "../components/CommnetInput";
import ProductDisplay from "../components/ProductDisplay";
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListGroupItem } from "react-bootstrap";

const ProductDetail = () => {
    const data = useContext(DataContext);
    const {id} = useParams(); 
    const [comment, setComments ] = useState(
        data.state.allComments.filter((comment)=>(comment.productId == id))); 
    
    // state.allComment의 값이 바뀔때마다 업데이트
    // 모든컴포넌트는 setState값이 바뀔때 업데이트된다
    useEffect(()=>{
        setComments(data.state.allComments.filter((comment)=>(comment.productId == id)))
    
    },[data.state.allComments])
    

    const getProduct =()=>{
        return (
        data.state.productList.find((product)=>(product.productId == id))   
    )}
    return ( 
        <div>
            <ProductDisplay product={getProduct()}/>
            <br></br>
            <hr/>
            <CommentInput productId ={id}/>
            <ListGroup style={{textAlign:"left"}}>
               {
                // 10/31 14:15
                comment.map((comment)=>(<Comment key={comment.commentId} comment={comment}/>))
                // key값과 commnet를 props로 뿌려준다  
               }
               
            </ListGroup>
                
        </div>
     );
}
 
export default ProductDetail
