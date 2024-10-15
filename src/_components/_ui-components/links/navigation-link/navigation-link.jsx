import classes from "./navigation-link.module.css";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

const NavigationLink = ({to, end, name, onClick, imageOfIcon}) => {

    return (
        <NavLink
            to={to}
            end={end}
            onClick={onClick}
            className={({isActive, isPending}) => {
                const cls = [
                    classes.navigationLink
                ]
                isPending
                    ? cls.push(classes.pending)
                    : isActive
                        ? cls.push(classes.active)
                        : cls.push(classes.default)

                return cls.join(" ")

            }}
        >
            <div className={classes.icon}>
                <img src={imageOfIcon} alt={`icon-${name}`}/>
            </div>
            <span className={classes.name}>{name}</span>
        </NavLink>
    )
}

NavigationLink.propTypes = {
    // required properties
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageOfIcon: PropTypes.string.isRequired,
    // optional properties
    end: PropTypes.bool,
    onClick: PropTypes.func
}

export default NavigationLink