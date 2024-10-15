import classes from "./links.module.css";
import PropTypes from "prop-types";
import LinkButton from "../../../../_ui-components/buttons/link-button/link-button.jsx";

const Links = ({list}) => {

    return (
        <ul className={classes.links}>
            {list?.length
                ? list.map(item => (
                    <li key={`links-item-${item.id}`}>
                        <LinkButton
                            className={classes.buttons}
                            label={item.label}
                            onClick={item.action}
                        />
                    </li>
                ))
                : null
            }
        </ul>
    )
}

Links.propTypes = {
    list: PropTypes.array
}

export default Links