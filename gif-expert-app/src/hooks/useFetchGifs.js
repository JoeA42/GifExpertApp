import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs.jsx";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }


    useEffect(() => {
            // noinspection JSIgnoredPromiseFromCall
            getImages();
        },
        [])

    return {
        images,
        isLoading
    }
}
