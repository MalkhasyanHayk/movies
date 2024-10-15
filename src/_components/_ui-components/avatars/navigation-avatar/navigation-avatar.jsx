import classes from "./navigation-avatar.module.css";
import PropTypes from "prop-types";

const NavigationAvatar = ({image, name, className}) => {

    return (
        <div className={`${className} ${classes.navigationAvatar}`}>
            <div className={classes.avatar}>
                {image
                    ? <img src={image} alt={"user-avatar"}/>
                    : <b>{name[0]}</b>
                }
            </div>
            <span className={classes.name}>{name}</span>
        </div>
    )
}

NavigationAvatar.propTypes = {
    // required properties
    name: PropTypes.string.isRequired,
    // optional properties
    className: PropTypes.string,
    image: PropTypes.string
}

export default NavigationAvatar