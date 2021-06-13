import React from 'react';
import ContactForm from  '../contact-form/contact-form';

const RequestInfo = (props) => {

    const {itemId, formId} = props;

    return(
        <ContactForm itemId={itemId} formId={formId} />
    )
}

export default RequestInfo;