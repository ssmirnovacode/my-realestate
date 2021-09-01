import React, { Component } from 'react';
import './reviews.scss';
import {connect} from 'react-redux';
import { reviewsRequested, reviewsLoaded, reviewsError } from '../../redux/actions/reviewsAC';
import firebase from '../../firebase.config';
import ReviewItem from '../review-item/review-item';
import ReviewForm from '../review-form/review-form';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';

class Reviews extends Component {

    componentDidMount() {
        this.props.reviewsRequested();
        const itemsRef = firebase.database().ref('reviews');
        itemsRef.on('value', (snapshot) => {
            const items = snapshot.val();
            if (items) {
                /* const itemList = [];
                for (let id in items) {
                    itemList.push({ id, ...items[id] });
                };
                console.log() */
                this.props.reviewsLoaded(items);
            }
            else {
                this.props.reviewsError();
            }
        });
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
            <div className="reviews__wrapper">
                <h3>Our clients about us:</h3>
                <ul className="reviews__list">
                {
                    items.length === 0 ? <div>No reviews found</div> : 
                        items.map(item => {
                            return(
                                <ReviewItem key={item.id} item={item} />
                            )
                        })
                }
                </ul>

                <ReviewForm />
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