import {useState} from "react";
import userAvatar from "/assets/avatar/avatar.jfif";

const useAuth = () => {
    const [user] = useState({
        id: 1,
        name: "Daniel",
        lastName: "Jonson",
        avatar: userAvatar
    })

    return {
        user
    }
}

export default useAuth