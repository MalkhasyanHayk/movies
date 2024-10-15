import classes from "./favorite-section.module.css";
import PropTypes from "prop-types";
import {secondsToHms} from "../../../../../_utilities/utilities.js";
import Button from "../../../../../_components/_ui-components/buttons/button/button.jsx";

const FavoriteSection = ({playVideo, videoSource, background, category, title, titleImage, releaseYear, mpaRating, duration, description}) => {

    return (
        <div className={classes.favoriteSection} style={{backgroundImage: `url(${background})`}}>
            {playVideo
                ? <video
                    className={classes.video}
                    autoPlay
                    src={`/assets/video/${videoSource}`}
                />
                : null
            }
            <div className={classes.content}>
                <div>
                    <span className={classes.category}>{category}</span>
                </div>
                <div>

                    {title
                        ? <span className={classes.title}>{title}</span>
                        : <img src={titleImage} alt="title"/>
                    }

                </div>
                <div className={classes.info}>
                    <span className={classes.releaseYear}>{releaseYear}</span>
                    <span className={classes.mpaRating}>{mpaRating}</span>
                    <span className={classes.duration}>{secondsToHms(duration)}</span>
                </div>
                <div>
                    <p className={classes.description}>{description}</p>
                </div>
                <div className={classes.controllers}>
                    <div>
                        <Button
                            rounded
                            label={"Play"}
                            icon={"/assets/icons/play.png"}
                        />
                    </div>
                    <div>
                        <Button
                            rounded
                            label={"More Info"}
                            gradient={["#2024DE", "#061983"]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

FavoriteSection.propTypes = {
    // required properties
    background: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    releaseYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    mpaRating: PropTypes.string.isRequired,
    duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    // optional properties
    videoSource: PropTypes.string,
    playVideo: PropTypes.bool,
    titleImage: PropTypes.string.isRequired,
    description: PropTypes.string
}

export default FavoriteSection