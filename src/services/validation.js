const validate = (values) => {
    const errors = {};
  
    if (values.name.length > 0 && !/[a-zA-Z]/ig.test(values.name)) {
        errors.name = 'Name can only contain letters';
      }
    
      if (values.lastname.length > 0 && !/[a-zA-Z]/ig.test(values.lastname)) {
        errors.lastname = 'Last name can only contain letters';
      }

    if (values.email.length > 0 && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
    }

    /* if (!values.phone) {
    errors.phone = 'Required';
    } else */ if (values.phone.length > 0 && !/([+]\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/i.test(values.phone)) {
    errors.phone = 'Invalid phone number';
    }
  
    return errors;
  };

  export default validate;