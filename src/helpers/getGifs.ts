export const getGifs = async (category:string) => {
    const apiKey = import.meta.env.PUBLIC_API_KEY;
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10&q=${category}`;
    const resp = await fetch(url);

    const { data = [] } = await resp.json();

    const gifs = data.map((img :any) =>(
        {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    ));

    return gifs;
};