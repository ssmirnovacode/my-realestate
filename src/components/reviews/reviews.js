import React, { Component } from 'react';
import './reviews.scss';
import {connect} from 'react-redux';
import { reviewsRequested, reviewsLoaded, reviewsError } from '../../redux/actions/reviewsAC';
import ReviewItem from '../review-item/review-item';
import ReviewForm from '../review-form/review-form';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';
import { getFeedback } from '../../api/api';

class Reviews extends Component {

    componentDidMount() {
        this.props.reviewsRequested();
        getFeedback()
        .then(res => {
            res.reviews.length > 0 ? this.props.reviewsLoaded(res.reviews) : this.props.reviewsError()
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.reviews.length !== this.props.reviews.length) {
            this.props.reviewsRequested();
            getFeedback()
            .then(res => {
                res.reviews.length > 0 ? this.props.reviewsLoaded(res.reviews) : this.props.reviewsError()
            })
        }
    }

    render() {
        const { items, loading, error } = this.props.reviews;

        if (loading) {
            return <Loading />
        }
        else if (error) {
            return <Error />
        }

        else return(
            <div className="reviews__wrapper container">
                <h3>Our clients about us:</h3><hr/>
                <div className="row">               
                    <div className="col-12 col-md-6">
                        <ul className="reviews__list">
                        {
                            items.length === 0 ? <div>No reviews found</div> : 
                                items.map(item => {
                                    return(
                                        <ReviewItem key={item._id} item={item} />
                                    )
                                })
                        }
                        </ul>
                    </div>
                    <div className="col-12 col-md-6">
                        <ReviewForm />
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    reviews: state.reviews
});

const mapDispatchToProps = {
    reviewsRequested, reviewsLoaded, reviewsError 
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);