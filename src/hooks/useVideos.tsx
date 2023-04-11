import { useContext } from "react";
import VideosContext, { UseVideosContextType } from "../context/VideosProvider";

const useVideos = (): UseVideosContextType => {
    return useContext(VideosContext);
};

export default useVideos;