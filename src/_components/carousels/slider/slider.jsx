import classes from "./slider.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import PropTypes from "prop-types";


const Slider = ({options}) => {

    return (
        <div className={classes.container}>
            <AliceCarousel
                {...options}
            />
        </div>
    )
}

Slider.propTypes = {
    // required properties
    options: PropTypes.object.isRequired
    // optional properties
}

export default Slider