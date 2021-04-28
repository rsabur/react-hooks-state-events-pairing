import {useState} from "react";
import Comments from "./Comments";

function CommentsList({comments}) {

let commentElements
const [showComment,setShowComment]=useState(true)

if (showComment === true) {
    commentElements = comments.map(comment => <Comments key={comment.id} {...comment} />)
} else {
    commentElements = []
}


function commentToggle() {
    setShowComment(!showComment)
} 

    return (
     <>
     <br/>
     <button onClick={commentToggle}>{showComment ? "Hide" : "Show"} Comments</button>
     <hr/>
     <h3>
     {comments.length} Comments    
     </h3>
     {commentElements}
     </>
    )
}


export default CommentsList;