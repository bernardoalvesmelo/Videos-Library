import { ReactElement, createContext, useState } from "react";

type videoType = {
    title: string,
    imageSrc: string,
    videoSrc: string,
};

const initState: videoType[] = [
    {
        title: "Blue Tit",
        imageSrc: "item0001",
        videoSrc: "video0001",
    },
    {
        title: "Playful Puppy",
        imageSrc: "item0002",
        videoSrc: "video0002",
    },
    {
        title: "Snail on Nature",
        imageSrc: "item0003",
        videoSrc: "video0003",
    },
];

export type UseVideosContextType = { videos: videoType[] };

const initContextState: UseVideosContextType = { videos: [] };

const VideosContext = createContext<UseVideosContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const VideosProvider = ({ children }: ChildrenType): ReactElement => {
    const [videos, setVideos] = useState<videoType[]>(initState)

    return (
        <VideosContext.Provider value={{ videos }}>
            {children}
        </VideosContext.Provider>
    );
};

export default VideosContext;
