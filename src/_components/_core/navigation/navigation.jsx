import "./navigation.css"
import classes from "./navigation.module.css";
import Links from "./components/links/links.jsx";
import useNavigation from "../../../_hooks/use.navigation.js";
import Menus from "./components/menus/menus.jsx";

const Navigation = () => {
    const {isOpen, handleIsOpen, user, links, navigations} = useNavigation()

    return (
        <nav className={`navigation ${classes.navigation}`}>
            <div>
                <Menus
                    isOpen={isOpen}
                    onHover={handleIsOpen}

                    name={user?.name}
                    image={user?.avatar}
                    navigations={navigations}
                />
            </div>
            <div>
                <Links list={links}/>
            </div>
        </nav>
    );
};

export default Navigation;