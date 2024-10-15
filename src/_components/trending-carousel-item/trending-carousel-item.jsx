import classes from "./trending-carousel-item.module.css";
import PropTypes from "prop-types";

const TrendingCarouselItem = ({image, onClick}) => {

    return (
        <div className={classes.trendingCarouselItem} onClick={onClick}>
            <img src={image} alt="image"/>
        </div>
    )
}

TrendingCarouselItem.propTypes = {
    //required properties
    image: PropTypes.string.isRequired,
    // optional properties
    onClick: PropTypes.func
}

export default TrendingCarouselItem