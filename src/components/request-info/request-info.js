import React from 'react';
import './request-info.scss';
import ContactForm from  '../contact-form/contact-form';

const RequestInfo = (props) => {

    const {itemId} = props;

    return(
        <ContactForm itemId={itemId} />
    )
}

export default RequestInfo;