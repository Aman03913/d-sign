import * as Yup from 'yup';
export const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('first name is required'),
    lastName: Yup.string().required('last name is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username should be at least 6 characters')
      .max(20, 'Username should not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Username should not exceed 64 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  });
  
  export const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string('Password is required')
      .min(6, 'Password must be atleast 6 characters')
      .max(64, 'Username should not exceed 64 characters'),
  });
  
  export const OTPSchema = Yup.object().shape({
    otp: Yup.number().required('OTP is required'),
  });