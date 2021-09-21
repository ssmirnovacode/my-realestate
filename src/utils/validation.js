export const validateReview = (values) => {
    const errors = {};
  
    if ( !/^[A-Za-z]+$/ig.test(values.author)) {
        errors.author = 'Name can only contain letters';
      }
    if ( values.author.length < 3 || values.author.length > 20 ) { 
      errors.author = 'Name must be 3-20 characters long';
    }

    if (values.text.length < 5 ) {
      errors.text = 'Your feedback must be at least 5 charactes long';
    }

    if (values.text.length > 1000 ) {
      errors.text = 'Your feedback must be less than 1000 charactes long';
    }
  
    return errors;
};

export const validateProperty = (values) => {
  const errors = {};

  if (values.streetnum.length < 5 || values.streetnum.length > 25) {
    errors.streetnum = 'Street and number input must be 5-25 characters long';
  }

  if (values.door.length < 1 || values.door.length > 15) {
    errors.door = 'Building, apartment and door input must be 1-15 characters long';
  }

  if (values.zipcode.length < 5 || values.zipcode.length > 6) {
    errors.zipcode = 'Zip code must be 5-6 characters long';
  }

  if (!/^[A-Za-z]+$/ig.test(values.name)) {
      errors.name = 'Name can only contain letters';
    }

  if (values.name.length < 3 || values.name.length > 20) {
    errors.name = 'Name must be 3-20 characters long';
  }
  
  if (values.lastname.length > 0 && !/^[A-Za-z]+$/ig.test(values.lastname)) {
    errors.lastname = 'Last name can only contain letters';
  }

  if (values.lastname.length < 3 || values.lastname.length > 20) {
    errors.lastname = 'Last name must be 3-20 characters long';
  }

  if (values.email.length > 0 && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  errors.email = 'Invalid email address';
  }

  if (values.phone.length > 0 && !/([+]\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/i.test(values.phone)) {
  errors.phone = 'Invalid phone number';
  }

  if (values.comments.length > 500) {
    errors.comments = 'Comment can not be more than 500 characters long';
  }

  return errors;
};

export const validateContact = (values) => {
  const errors = {};

  if (!/^[A-Za-z]+$/ig.test(values.name)) {
      errors.name = 'Name can only contain letters';
    }

  if (values.name.length < 3 || values.name.length > 20) {
    errors.name = 'Name must be 3-20 characters long';
  }
  
  if (values.lastname.length > 0 && !/^[A-Za-z]+$/ig.test(values.lastname)) {
    errors.lastname = 'Last name can only contain letters';
  }

  if (values.lastname.length < 3 || values.lastname.length > 20) {
    errors.lastname = 'Last name must be 3-20 characters long';
  }

  if (values.email.length > 0 && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  errors.email = 'Invalid email address';
  }

  if (values.phone.length > 0 && !/([+]\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/i.test(values.phone)) {
  errors.phone = 'Invalid phone number';
  }

  if (values.comments.length > 500) {
    errors.comments = 'Comment can not be more than 500 characters long';
  }

  return errors;
};
