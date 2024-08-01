import { useState, useEffect } from "react";
import { PictureOfDay } from "./DisplayPicture";

export function PreviewImage({ imageProp }: { imageProp: PictureOfDay }) {

    const [myPreviewImage, setMyPreviewImage] = useState<PictureOfDay | null>(null);

    useEffect(() => {
        setMyPreviewImage(imageProp);
    }, [])

    return (
        <img src={myPreviewImage?.url} alt={myPreviewImage?.explanation}/>
    )

}