import { useState, useEffect } from "react";
import { PictureOfDay } from "./DisplayPicture";
import { fetchAPI } from "../utils/fetchData";

interface PreviewImageProp {
    image: PictureOfDay;
}

interface ImageProps {
    setMyPreviewImage: React.Dispatch<React.SetStateAction<PictureOfDay | null>>
}

interface BirthdayProps {
    event: React.FormEvent<HTMLFormElement>;
    setMyPreviewImage: React.Dispatch<React.SetStateAction<PictureOfDay | null>>
}

const getTodaysImage = async (getTodaysImageProps: ImageProps) => {
    const todaysPicture = await fetchAPI("https://api.nasa.gov/planetary/apod?api_key=")
    getTodaysImageProps.setMyPreviewImage(todaysPicture);
}

export function PreviewImage() {

    const [myPreviewImage, setMyPreviewImage] = useState<PictureOfDay | null>(null);
    const [birthday, setBirthday] = useState('');

    const handleSubmit = async (getBirthdayProps: BirthdayProps) => {

        getBirthdayProps.event.preventDefault();
        const userBirthdayImage = await fetchAPI("https://api.nasa.gov/planetary/apod?api_key=", birthday);
        
        getBirthdayProps.setMyPreviewImage(userBirthdayImage);
    }

    return (
        <>
            <h4>CHOOSE THE IMAGE YOU WANT TO DISPLAY:</h4>

            {/* <button type="button" id="random-date-button" onClick={getRandomDateImage}>Random</button> */}

            <button type="button"
                id="todays-date-button"
                onClick={() => getTodaysImage({ setMyPreviewImage })}>Today</button>

            <form onSubmit={(event) => handleSubmit({ event, setMyPreviewImage })}>

                <label>Birthday</label>
                <input
                    type="date"
                    id="birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>

            <img src={myPreviewImage?.url} alt={myPreviewImage?.explanation} className="preview-chosen-image"/>
        </>
    )

}