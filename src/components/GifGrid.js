import React, { useEffect, useState } from 'react'
import { getGift } from '../helpers/getGift';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    //Custom hooks, mandar category de parametro
    const {data:images, loading} = useFetchGifs(category);
    /*
    const [images, setImages] = useState([])
    useEffect(() =>{
        getGift(category)
        .then(setImages)
    },[category]);
    */
    //Esta en helpers
/*
    const getGift = async() => {
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
        setImages(gifs);
    }
*/
    //Se llama desde useEffect para evitar llamadas al renderizar componente
    //getGift();

    return (
        <>
            <h3 className='animate__animated animate__bounce'>{category}</h3>
            {loading && 'Cargando...'}
            <div className="card-grid">
                    {
                        //Desestruturar con {}   
                        images.map((img) =>(
                            //<li key = { id }>{title}</li>
                            <GifGridItem 
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
            </div>
        </>
    )
}
