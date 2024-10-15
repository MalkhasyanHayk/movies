import classes from "./button.module.css";
import PropTypes from "prop-types";

const Button = ({rounded = false, disabled = false, label, icon, gradient = [], onClick}) => {
    const cls = [
        classes.button,
        rounded ? classes.rounded : null,
        gradient?.length ? classes.gradient : null
    ]

    const options = {
        background: gradient?.length
            ? `linear-gradient(to right, ${gradient[0]}, ${gradient[1]})`
            : `var(--primary)`
    }

    return (
        <button
            className={cls.join(" ")}
            style={options}
            disabled={disabled}
            onClick={onClick}
        >
            {!!icon && <img src={icon} alt="icon" className={classes.icon}/>}
            <span className={classes.label}>{label}</span>
        </button>
    )
}

Button.propTypes = {
    // required properties
    label: PropTypes.string.isRequired,
    // optional properties
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    gradient: PropTypes.array,
    onClick: PropTypes.func
}

export default Button