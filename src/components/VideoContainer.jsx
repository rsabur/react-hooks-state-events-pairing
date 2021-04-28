import Buttons from "./Buttons";

function VideoContainer({ title, views, embedUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ", createdAt, upvotes, downvotes }) {

    return (
        <>
            <iframe
                width="919"
                height="525"
                src={embedUrl}
                frameborder="0"
                allowfullscreen
                title={title}
            />
            <h1>{title}</h1>
            <small>{views} Views | Uploaded {createdAt}</small>
            <br/>
            <span>
                <Buttons />
            </span>
            <br></br>
        </>
    )
}


export default VideoContainer;