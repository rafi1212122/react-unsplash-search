import React from "react";
import "../css/ImageList.css"
import ImageCard from "./ImageCard";

const ImageList = function(props){
    const images = props.images.map((img)=>{
        return <ImageCard image={img} key={img.id}/>
    })

    return(
        <div className="image-list">{images}</div>
    )
}

export default ImageList