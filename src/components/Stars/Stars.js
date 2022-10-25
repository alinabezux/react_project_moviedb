import StarRatings from "react-star-ratings/build/star-ratings";

const Stars = ({rating}) => {
    return (
        <div className={'stars'}>
            <StarRatings
                rating={rating}
                starRatedColor="yellow"
                numberOfStars={10}
                name='rating'
                starDimension="15px"
                starSpacing="2px"
            />
        </div>
    );
}

export {Stars}