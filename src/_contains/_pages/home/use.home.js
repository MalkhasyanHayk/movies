import {useCallback, useEffect, useState} from "react";
import data from "../../../_jsons/data.json"

const useHome = () => {
    const [featured, setFeatured] = useState(null)
    const [movies, setMovies] = useState([])
    const [playVideo, setPlayVideo] = useState(false)

    const handleSelect = useCallback(movie => {
        setPlayVideo(false)
        setFeatured(movie)
        setTimeout(() => {
            setPlayVideo(true)
        }, 2000)
    }, [])

    useEffect(() => {
        setFeatured(data.Featured)
        setMovies(() => data.TendingNow.sort((cur, next) => {
            return (new Date(cur.Date) > new Date(next.Date))
                ? 1
                : (new Date(cur.Date) < new Date(next.Date))
                    ? -1
                    : 0
        }))
    }, []);

    return {
        featured,
        movies,
        playVideo,

        handleSelect
    }
}

export default useHome