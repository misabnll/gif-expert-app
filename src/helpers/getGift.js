export const getGift = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q= ${encodeURI(category)} &limit=10&api_key=67gJWyv3bwKxgcTDQdsU4PKgs3ui0L1O`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    //? por si no devuelve nada
    const gifs = data.map(img =>{
        return {
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        } 
    })
    //Guardar respuesta en useState
    return gifs;
}