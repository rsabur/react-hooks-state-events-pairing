import video from "../data/video.js";
import VideoContainer from "./VideoContainer";
import CommentsList from "./CommentsList"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoContainer {...video}/>
      <CommentsList />
    </div>
  );
}


export default App;
