import classes from "./home.module.css"
import FavoriteSection from "./components/favorite-section/favorite-section.jsx";
import TrendingSection from "./components/trending-section/trending-section.jsx";
import useHome from "./use.home.js";

const Home = () => {
    const {featured, movies, playVideo, handleSelect} = useHome()

    return (
        <div className={classes.home}>
            <div>
                {featured ?
                    <FavoriteSection
                        playVideo={playVideo}
                        videoSource={featured?.VideoUrl}
                        category={featured.Category}
                        title={featured.Title}
                        releaseYear={featured.ReleaseYear}
                        mpaRating={featured.MpaRating}
                        duration={featured.Duration}
                        description={featured.Description}
                        background={`/assets/${featured.CoverImage}`}
                        titleImage={`/assets/${featured.TitleImage}`}
                    />
                    :
                    null
                }
            </div>
            <div>
                <TrendingSection
                    movies={movies}
                    onSelect={handleSelect}
                />
            </div>
        </div>
    );
};

export default Home;