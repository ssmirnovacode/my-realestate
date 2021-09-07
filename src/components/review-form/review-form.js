import React, {useState} from 'react';
import './review-form.scss';
import {useFormik} from 'formik';
import {validateReview as validate} from '../../utils/validation';
import { postFeedback } from '../../api/api';

const ReviewForm = () => {

    const [message, setMessage] = useState({
        loading: false,
        type: '',
        text: ''
    });

    const formik = useFormik({
        initialValues: {
            author: '',
            text: ''
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            setMessage(message => ({
                ...message,
                loading: true
            }));
            postFeedback(values)
            .then(res => {
                setMessage({
                    loading: false,
                    type: 'success',
                    text: res.message 
                })
                resetForm();
                const timerId = setTimeout( (() => {setMessage({
                    loading: false,
                    type: '',
                    text: null
                }); clearInterval(timerId)}), 5000);
            })
            .catch(err => {
                setMessage({
                    loading: false,
                    type: 'error',
                    text: 'Server is not available. Try again later'
                })
                const timerId = setTimeout( (() => {setMessage({
                    loading: false,
                    type: '',
                    text: null
                }); clearInterval(timerId)}), 4000);
            })
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
            <div className="submit_box">
                <button type="submit" className="btn btn-primary mt-3">Submit</button><span className="message_loading">{ message.loading && <i className="fa fa-spinner fa-spin" aria-hidden="true"></i> }</span>
            </div>
            <div className={message.type === 'success' ? "message message_success" : "message message_error" }>{message.text}</div>
        </form>
    )
};

export default ReviewForm;