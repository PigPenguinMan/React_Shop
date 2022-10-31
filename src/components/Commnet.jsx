import ListGroup from 'react-bootstrap/ListGroup';


const Comment = (props) => {
    const { comment } = props;
    return ( 
        <div>
            <ListGroup.Item>
                <h4>{comment.name}</h4>
                 <div>
                 <p>{comment.text}</p>
                 <button ></button>
                 </div>
            
            </ListGroup.Item>

        </div>
     );
}
 
export default Comment;