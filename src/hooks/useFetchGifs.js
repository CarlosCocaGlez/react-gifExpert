// Un hook no es mas que una funcion que regresa algo
import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getImageData = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImageData();
    }, [])

    return {
        images,
        isLoading,
    }
}