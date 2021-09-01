import React from 'react';
import './review-form.scss';
import {useFormik} from 'formik';
import {validateReview as validate} from '../../services/validation';
import firebase from '../../firebase.config';

const ReviewForm = () => {

    const formik = useFormik({
        initialValues: {
            author: '',
            text: ''
        },
        validate,
        onSubmit: (values, { resetForm }, e) => {
            //values.id = Math.random().toString();
            const requestRef = firebase.database().ref('reviews');
            requestRef.push(values);
            console.log(values);
            resetForm();
        }
      });

    return(
        <form onSubmit={formik.handleSubmit} className="form__wrapper">
            <div className="form__title">Your feedback: </div>
            <div className="form-group">
                <input type="text" className="form-control" name="author" placeholder="Name" required
                    onChange={formik.handleChange} value={formik.values.author} />
                    {formik.errors.author ? <div className="errMess">{formik.errors.author}</div> : null}
            </div>
            <div className="form-group">
                <textarea className="form-control" name="text" placeholder="Your feedback" required
                    onChange={formik.handleChange} value={formik.values.text} />
                    {formik.errors.text ? <div className="errMess">{formik.errors.text}</div> : null}
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    )
};

export default ReviewForm;