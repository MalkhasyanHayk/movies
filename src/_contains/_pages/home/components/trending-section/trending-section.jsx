import classes from "./trending-section.module.css"
import Slider from "../../../../../_components/carousels/slider/slider.jsx";
import PropTypes from "prop-types";
import TrendingCarouselItem from "../../../../../_components/trending-carousel-item/trending-carousel-item.jsx";

const TrendingSection = ({movies, onSelect}) => {

    return (
        <div className={classes.trendingSection}>
            <div>
                <h2>Trending Now</h2>
            </div>
            <div>
                <Slider
                    options={{
                        controlsStrategy: "alternate",
                        disableButtonsControls: true,
                        infinite: true,
                        disableDotsControls: true,
                        mouseTracking: true,
                        responsive:  {
                            0: { items: 1 },
                            640: { items: 2 },
                            1024: { items: 4 },
                            1280: { items: 5 },
                            1536: { items: 6 },
                            1780: { items: 8 },
                        },
                        items: movies?.map(movie => {

                            return (
                                <div key={`movie-${movie.Id}`} className={classes.item}>
                                    <TrendingCarouselItem
                                        image={`/assets/${movie?.CoverImage}`}
                                        onClick={onSelect?.bind(this, movie)}
                                    />
                                </div>
                            )
                        })
                    }}
                />
            </div>
        </div>
    )
}

TrendingSection.propTypes = {
    // required properties
    movies: PropTypes.array,
    // optional properties
    onSelect: PropTypes.func
}

export default TrendingSection

