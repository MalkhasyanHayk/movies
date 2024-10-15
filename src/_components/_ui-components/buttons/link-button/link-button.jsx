import classes from "./link-button.module.css";
import PropTypes from "prop-types";

const LinkButton = ({disabled = false, label, className, onClick}) => {

    return (
        <button
            className={`${classes.button} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

LinkButton.propTypes = {
    // required properties
    label: PropTypes.string.isRequired,
    // optional properties
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

export default LinkButton