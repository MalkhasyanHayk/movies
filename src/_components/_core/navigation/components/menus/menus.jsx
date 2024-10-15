import "../../navigation.css"
import classes from "./menus.module.css";
import NavigationAvatar from "../../../../_ui-components/avatars/navigation-avatar/navigation-avatar.jsx";
import PropTypes from "prop-types";
import NavigationLink from "../../../../_ui-components/links/navigation-link/navigation-link.jsx";

const Menus = ({isOpen, name, image, navigations}) => {

    return (
        <div className={classes.menus}>
            <div>
                <NavigationAvatar name={name} image={image} className={"menuAvatar"}/>
            </div>
            <div>
                {navigations?.length ?
                    <ul className={classes.menuList}>
                        {navigations.map(navigation => {

                            return (
                                <li key={`navigation-item-${navigation.id}`}>
                                    <NavigationLink
                                        isOpen={isOpen}
                                        to={navigation.path}
                                        end={true}
                                        name={navigation.name}
                                        imageOfIcon={navigation.icon}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                    : null
                }
            </div>
        </div>
    )
}

Menus.propTypes = {
    // required properties
    isOpen: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    navigations: PropTypes.array.isRequired,
    // optional properties
    image: PropTypes.string
}

export default Menus