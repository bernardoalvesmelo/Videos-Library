import { useState } from "react"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Video } from "./components/Video";
import { VideoList } from "./components/VideoList/VideoList";

function App() {
const [inVideo, setInVideo] = useState<boolean>(false);
const [selectedVideo, setSelectedVideo] = useState<string>("");

  return (
    <div className="App">
      <Header
      inVideo={inVideo} 
      setInVideo={setInVideo}
      />
      {inVideo 
      ? <Video
      selectedVideo={selectedVideo}
      /> 
      : <VideoList 
      inVideo={inVideo} 
      setInVideo={setInVideo}
      selectedVideo={selectedVideo}
      setSelectedVideo={setSelectedVideo}
      />}
      <Footer/>
    </div>
  );
};

export default App;
