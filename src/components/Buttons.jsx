import { useState } from "react";

function Buttons() {

    const [upvoteCount, setUpvoteCount] = useState(9210)
    const [downvoteCount, setDownvoteCount] = useState(185)

    function upvoter() {
        setUpvoteCount(upvoteCount + 1)
    }

    function downvoter() {
        setDownvoteCount(downvoteCount + 1)
    }

    return (
        <>
            <br />
            <button onClick={upvoter} className="upvote">👍 {upvoteCount}</button>
            <button onClick={downvoter} className="downvote">👎 {downvoteCount}</button>
        </>
    )
}

export default Buttons;