type PropsType = {
    inVideo: boolean,
    setInVideo: React.Dispatch<React.SetStateAction<boolean>>,
}

export const Header = ({inVideo, setInVideo}: PropsType) => {
    return (
        <header className="header">
            <h1>Videos Library</h1>
            <h2 onClick={()=>{setInVideo(false)}}>Home</h2>
        </header>
    );
};