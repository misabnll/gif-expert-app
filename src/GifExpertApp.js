import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch']);
    /*
    const handleAdd = () => {
        //Dos formas de hacerlo
        //setCategories([...categories, 'Death Note']);
        setCategories(cats => [...cats, 'Death Note']);
    }
    */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr />

            <ol>
                {
                    //Si devuelve solo un objeto se ponen prentesis y no hace falta declarar return
                    categories.map(category =>(
                        <GifGrid key={category} category={category} />
                        //return <li key = { category }>{category}</li>
                    ))
                }
            </ol>
        </>
    )
}
