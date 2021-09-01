import React, { Component } from 'react';
import './reviews.scss';
import {connect} from 'react-redux';
import firebase from '../../firebase.config';

class Reviews extends Component {



    render() {
        return(
            <div className="reviews__wrapper">
                <h3>Our clients about us:</h3>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    reviews: state.reviews
});

export default connect(mapStateToProps)(Reviews);