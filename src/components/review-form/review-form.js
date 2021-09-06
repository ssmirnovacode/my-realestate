import React, {useState} from 'react';
import './review-form.scss';
import {useFormik} from 'formik';
import {validateReview as validate} from '../../utils/validation';
import { postFeedback } from '../../api/api';

const ReviewForm = () => {

    const [message, setMessage] = useState(null);

    const formik = useFormik({
        initialValues: {
            author: '',
            text: ''
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            postFeedback(values)
            .then(res => {
                setMessage(res.message);
                resetForm();
            })
            .catch(err => console.log(err));
            /* const requestRef = firebase.database().ref('reviews');
            requestRef.push(values);
             */
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
            <div className="message">{message}</div>
        </form>
    )
};

export default ReviewForm;