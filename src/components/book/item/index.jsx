import React from 'react';
import {Card} from 'react-bootstrap';
import PropTypes from 'prop-types';
import StarRating from "../../star-rating";

const DEFAULT_IMAGE = "https://via.placeholder.com/681?text=нет%20фото";

const Item = ({
                  item: {
                      id,
                      title: {value: titleValue},
                      cover: {value: coverValue},
                      description: {value: descriptionValue},
                      rating: {value: ratingValue}
                  }
              }) => {

    return (
        <Card>
            <Card.Img
                variant="top"
                src={coverValue !== '' ? coverValue : DEFAULT_IMAGE}
                onError={(e) => e.target.src = DEFAULT_IMAGE}/>
            <Card.Body>
                <Card.Title>{titleValue}</Card.Title>
                <Card.Text>{descriptionValue}</Card.Text>
            </Card.Body>
            <Card.Footer>
                Rating:
                <StarRating
                    disabled={true}
                    rating={ratingValue}
                />
            </Card.Footer>
        </Card>
    )
};

Item.propTypes = {
    id: PropTypes.number,
    title: PropTypes.shape({
        value: PropTypes.string
    }),
    cover: PropTypes.shape({
        value: PropTypes.string
    }),
    description: PropTypes.shape({
        value: PropTypes.string
    }),
    rating: PropTypes.shape({
        value: PropTypes.number
    }),
};

export default Item;