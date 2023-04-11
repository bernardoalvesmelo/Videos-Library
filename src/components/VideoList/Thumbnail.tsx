import { ReactElement } from "react";

type PropsType = {
    title: string,
    imageSrc: string,
}

export const Thumbnail = ({title, imageSrc}: PropsType): ReactElement => {
    const img: string = new URL(`../../images/${imageSrc}.PNG`, import.meta.url).href;
    return (
        <div className="thumbnail">
            <h2>{title}</h2>
            <img src={img} alt={title}/>
        </div>
    );
};