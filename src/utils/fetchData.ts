// 1. .env has to be created in root
// 2. inside .env, it should be REACT_APP_NASA_API_KEY="<your api key>"

const year = new Date().getFullYear()
const month = (new Date().getMonth()) + 1
const date = new Date().getDate()
const todaysDate = `${year}-${month}-${date}`

export async function fetchAPI(apiUrl: string, date = todaysDate) {
    const apiKey = process.env.REACT_APP_NASA_API_KEY;
    const link = `${apiUrl}${apiKey}&date=${date}`;

    try {
        const response = await fetch(link);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        //test code
        // const pictureData = await response.json();
        const pictureData = {
            "date": "2024-07-30",
            "explanation": "To some, it looks like a penguin. But to people who study the universe, it is an interesting example of two big galaxies interacting. Just a few hundred million years ago, the upper NGC 2936 was likely a normal spiral galaxy: spinning, creating stars, and minding its own business.  Then it got too close to the massive elliptical galaxy NGC 2937, below, and took a dive.  Together known as Arp 142, they are featured in this new Webb infrared image, while a visible light Hubble image appears in comparison.  NGC 2936 is not only being deflected, but distorted, by this close gravitational interaction.  When massive galaxies pass near each other, gas is typically condensed from which new stars form.  A young group of stars appears as the nose of the penguin toward the right of the upper galaxy, while in the center of the spiral, bright stars together appear as an eye.  Before a billion years, the two galaxies will likely merge into one larger galaxy.   Explore Your Universe: Random APOD Generator",
            "hdurl": "https://apod.nasa.gov/apod/image/2407/Arp142_Webb_1487.jpg",
            "media_type": "image",
            "service_version": "v1",
            "title": "Arp 142: Interacting Galaxies from Webb",
            "url": "https://apod.nasa.gov/apod/image/2407/Arp142_Webb_960.jpg"
        }

        // console.log(pictureData);

        return pictureData;
    } catch (err) {
        throw err;
    }
}

export async function fetchRandomAPI(apiUrl: string) {
    const apiKey = process.env.REACT_APP_NASA_API_KEY;
    const link = `${apiUrl}${apiKey}&count=1`;

    try {
        const response = await fetch(link);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const pictureData = await response.json();
        console.log(pictureData);
        return pictureData;
    } catch (err) {
        throw err;
    }
}