import { useState, useEffect } from "react";
import { PictureOfDay } from "./DisplayPicture";

interface PreviewImageProp {
    image: PictureOfDay;
}

    export function PreviewImage(imageProp: PreviewImageProp) { 

    const [myPreviewImage, setMyPreviewImage] = useState<PictureOfDay | null>(null);

    useEffect(() => {
        setMyPreviewImage(imageProp.image); 
    }, [])

    return (
        <img src={myPreviewImage?.url} alt={myPreviewImage?.explanation}/>
    )

}