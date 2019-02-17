import React, {Component} from 'react';
import PropTypes from "prop-types";
import './styles.css';

class StarRating extends Component {

    state = {
        rating: null,
        tempRating: null,
        disabled: false
    };

    componentDidMount() {
        const {rating} = this.props;

        this.setState({
            rating,
            tempRating: rating,
        })
    };

    rate = (rating) => {
        if (this.props.disabled) {
            return;
        }
        this.setState({
            rating,
            tempRating: rating
        });
        this.props.onChange(rating, this.props.id);
    };

    starOver = (rating) => {
        if (this.props.disabled) {
            return;
        }
        this.setState({
             rating,
        });
    };

    starOut = () => {
        if (this.props.disabled) {
            return;
        }
        this.setState({
            rating: this.state.tempRating
        });
    };

    render() {
        let stars = [];
        const {rating} = this.state;

        for (let i = 0; i < 5; i++) {
            let klass = 'star-rating__star';

            if (rating >= i && rating != null) {
                klass += ' is-selected';
            }

            stars.push(
                <label
                    key={i}
                    className={klass}
                    onClick={this.rate.bind(this, i)}
                    onMouseOver={this.starOver.bind(this, i)}
                    onMouseOut={this.starOut}>
                    ★
                </label>
            );
        }

        return (
            <div className="star-rating">
                {stars}
            </div>
        );
    }
}

StarRating.propTypes = {
    disabled: PropTypes.bool,
    rating: PropTypes.number,
    onChange: PropTypes.func
};

StarRating.defaultProps = {
    disabled: false,
    rating: 0,
    onChange: () => {}
};

export default StarRating;