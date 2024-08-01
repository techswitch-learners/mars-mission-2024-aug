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

        const pictureData = await response.json();
        console.log(pictureData);
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