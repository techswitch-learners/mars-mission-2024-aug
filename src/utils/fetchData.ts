// 1. .env has to be created in root
// 2. inside .env, it should be REACT_APP_NASA_API_KEY="<your api key>"

export async function fetchAPI(apiUrl: string) {
    const apiKey = process.env.REACT_APP_NASA_API_KEY;
    const link = `${apiUrl}${apiKey}`;

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