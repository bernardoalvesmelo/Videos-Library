type PropsType = {
    selectedVideo: string,
}

export const Video = ({ selectedVideo }: PropsType) => {
    const videoSelect: string = new URL(`../videos/${selectedVideo}.mp4`, import.meta.url).href;

    return (
        <div className="video">
            <video src={videoSelect} loop controls ={true} autoPlay muted />
        </div>
    );
};