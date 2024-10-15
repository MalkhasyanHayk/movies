import {useCallback, useState} from "react";
import useAuth from "./use.auth.js";

const useNavigation = () => {
    const {user} = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const handleIsOpen = useCallback(() => setIsOpen(prevState => !prevState), [])

    const [links] = useState([
        {id: 1, label: "Language", action: () => alert("Change language")},
        {id: 2, label: "Get help", action: () => alert("Get helps")},
        {id: 3, label: "exit", action: () => alert("Exit")}
    ])
    const [navigations] = useState([
        {id: 1, name: "Search", path: "/search", icon: "/assets/icons/search.png"},
        {id: 2, name: "Home", path: "/", icon: "/assets/icons/home.png"},
        {id: 3, name: "TV Shorts", path: "/shorts", icon: "/assets/icons/shorts.png"},
        {id: 4, name: "Movies", path: "/movies", icon: "/assets/icons/movies.png"},
        {id: 5, name: "Genres", path: "/genres", icon: "/assets/icons/genres.png"},
        {id: 6, name: "Watch Later", path: "/watch-later", icon: "/assets/icons/watch-later.png"},
    ])


    return {
        user,

        isOpen,
        handleIsOpen,

        links,
        navigations
    }
}

export default useNavigation