import React, { useState, useEffect } from 'react';
import { fetchAPI } from '../utils/fetchData';

interface PictureOfDay {
    date: string,
    explanation: string,
    hdurl: string,
    title: string,
    url: string
}

const DisplayBgImage = () => {
    const [myPictureData, setMyPictureData] = useState<PictureOfDay | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const FetchPicture = async () => {

        try {
            setIsLoading(true);

            const pictureData = await fetchAPI("https://api.nasa.gov/planetary/apod?api_key=");

            setMyPictureData(pictureData);
            setIsLoading(false);

        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err); // Set the actual Error object
            } else {
                setError(new Error('An unknown error occurred')); // Provide a default Error object
            }

            setIsLoading(false);
        }
    }
    useEffect(() => {
        FetchPicture();
    }, [])

    if (isLoading) return (<div>Is Loading...</div>);
    if (error) return (<div>{error.message}</div>);
    if (!myPictureData) return (<div>EMPTY</div>);


    return (
        <img className='background-img' src={myPictureData.hdurl} />
    )

};

export default DisplayBgImage;