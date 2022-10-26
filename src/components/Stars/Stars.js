import StarRatings from "react-star-ratings/build/star-ratings";

const Stars = ({rating}) => {
    return (
        <div className={'stars'}>
            <StarRatings
                rating={rating}
                starRatedColor="yellow"
                numberOfStars={10}
                name='rating'
                starDimension="25px"
                starSpacing="5px"
            />
        </div>
    );
}

export {Stars}