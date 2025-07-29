import * as yup from 'yup';

export const createProfileSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .min(3, 'min length 3 and max is 50')
    .max(50, 'min length 3 and max is 50'),
  lastName: yup.string().required('Last name is required'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(/^01[0125][0-9]{8}$/, 'Must be a valid Egyptian phone number'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

export const SignInschema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  password: yup.string().required('Password is required'),
});
