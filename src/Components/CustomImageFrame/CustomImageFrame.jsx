import style from "./CustomImageFrame.module.css";

export function CustomImageFrame({ src,alt }) {
    return (
        <img className={style.container} src={src} alt={alt}></img>
    )
}

//using the property object directly
export function CustomImageFrame2(properties){

    return (
        <img src={properties.src}></img>
    )
}

//using destructuring
export function CustomImageFrame3(properties){

    return (
        <img src={properties.src}></img>
    )
}