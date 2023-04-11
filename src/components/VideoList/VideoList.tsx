import useVideos from "../../hooks/useVideos";
import { Thumbnail } from "./Thumbnail";

type PropsType = {
    inVideo: boolean,
    setInVideo: React.Dispatch<React.SetStateAction<boolean>>,
    selectedVideo: string,
    setSelectedVideo: React.Dispatch<React.SetStateAction<string>>,
}

export const VideoList = ({inVideo, setInVideo, selectedVideo, setSelectedVideo}: PropsType) => {

    const { videos } = useVideos();

    const setVideo = (videoSrc: string) => {
        setSelectedVideo(videoSrc);
        setInVideo(true);
    }

    return (
        <div className="video-list">
            {videos.map((video, key) => {
                return (
                    <span key={key}onClick={() => {setVideo(video.videoSrc)}}>
                        <Thumbnail
                            title={video.title}
                            imageSrc={video.imageSrc}
                        />
                    </span>
                );
            })}
        </div>
    );
};