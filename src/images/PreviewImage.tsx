import { useState } from "react";
import { PictureOfDay } from "./DisplayPicture";
import { fetchAPI, fetchRandomAPI } from "../utils/fetchData";

export function PreviewImage() {

    const [myPreviewImage, setMyPreviewImage] = useState<PictureOfDay | null>(null);
    const [birthday, setBirthday] = useState('');

    const handleRandomButtonClick = async () => {
        try {
            const randomPicture = await fetchRandomAPI("https://api.nasa.gov/planetary/apod?api_key=");
            setMyPreviewImage(randomPicture[0]);
            console.log(myPreviewImage);

        }
        catch (error) {
            console.error("Error fetching today's image:", error);
        }
    }

    const handleTodayButtonClick = async () => {
        try {
            const todaysPicture = await fetchAPI("https://api.nasa.gov/planetary/apod?api_key=");
            setMyPreviewImage(todaysPicture);
        }
        catch (error) {
            console.error("Error fetching today's image:", error);
        }
    }

    const handleBirthdayFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const userBirthdayImage = await fetchAPI("https://api.nasa.gov/planetary/apod?api_key=", birthday);
            setMyPreviewImage(userBirthdayImage);
        } catch (error) {
            console.error("Error fetching today's image:", error);
        }
    }

    return (
        <>
            <h4>CHOOSE THE IMAGE YOU WANT TO DISPLAY:</h4>
            <button type="button"
                id="todays-date-button"
                onClick={handleTodayButtonClick}>Today</button>

            <button type="button"
                id="random-button"
                onClick={handleRandomButtonClick}>Random</button>
                
            <form onSubmit={handleBirthdayFormSubmit}>
                <label>Birthday</label>
                <input
                    type="date"
                    id="birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <img src={myPreviewImage?.url} alt={myPreviewImage?.explanation} className="preview-chosen-image" />
        </>
    )

}