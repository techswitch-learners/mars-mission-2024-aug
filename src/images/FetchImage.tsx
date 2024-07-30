import React, { useState, useEffect } from 'react';

interface PictureOfDay {
    date: string,
    explanation: string,
    hdurl: string,
    title: string,
    url: string
}

export const DisplayPictureOfDay: React.FC = () => {   

    const [myPictureData, setMyPictureData] = useState<PictureOfDay | null>(null);

    const FetchPictureOfDay = async () => {
        const apiKey = process.env.REACT_APP_NASA_API_KEY;
        const link = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        console.log(apiKey);
        const response = await fetch(link);

        const apiKey = process.env.REACT_APP_NASA_API_KEY;
        const link = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        // console.log(apiKey);
        
        const response = await fetch(link);

        const pictureData = await response.json();

        //test picture data for when the API requests have reached their limit:
        //         const pictureData = {
        //     "date": "2024-07-30",
        //     "explanation": "To some, it looks like a penguin. But to people who study the universe, it is an interesting example of two big galaxies interacting. Just a few hundred million years ago, the upper NGC 2936 was likely a normal spiral galaxy: spinning, creating stars, and minding its own business.  Then it got too close to the massive elliptical galaxy NGC 2937, below, and took a dive.  Together known as Arp 142, they are featured in this new Webb infrared image, while a visible light Hubble image appears in comparison.  NGC 2936 is not only being deflected, but distorted, by this close gravitational interaction.  When massive galaxies pass near each other, gas is typically condensed from which new stars form.  A young group of stars appears as the nose of the penguin toward the right of the upper galaxy, while in the center of the spiral, bright stars together appear as an eye.  Before a billion years, the two galaxies will likely merge into one larger galaxy.   Explore Your Universe: Random APOD Generator",
        //     "hdurl": "https://apod.nasa.gov/apod/image/2407/Arp142_Webb_1487.jpg",
        //     "media_type": "image",
        //     "service_version": "v1",
        //     "title": "Arp 142: Interacting Galaxies from Webb",
        //     "url": "https://apod.nasa.gov/apod/image/2407/Arp142_Webb_960.jpg"
        // }

        console.log(pictureData);
        setMyPictureData(pictureData);
    }

    useEffect(() => {
        FetchPictureOfDay();
    }, [])

    if (!myPictureData) {
        return (<div>EMPTY</div>)
    }


    return (
        <>
            <h3>{myPictureData.title}</h3>
            <p>{myPictureData.date}</p>
            <p>{myPictureData.explanation}</p>
            <img src={myPictureData.url} />
            <img src={myPictureData.hdurl} />
        </>
    )

};