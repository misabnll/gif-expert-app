import { useEffect, useState } from "react"
import { getGift } from "../helpers/getGift";

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    useEffect(() =>{
        getGift(category)
        .then(imgs =>{
            setTimeout(()=>{
                setstate({
                    data:imgs,
                    loading:false
                });
            }, 3000);
        })
    },[category]);

    return state;
}