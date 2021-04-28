
function Comments({comment,user}) {

    return(
        <div className="comments">
            <h5>{user}</h5>
            <p>{comment}</p>
        </div>
    )
}

export default Comments