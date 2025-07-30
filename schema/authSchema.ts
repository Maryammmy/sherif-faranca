import * as yup from "yup";

export const createProfileSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(3, "min length 3 and max is 50")
    .max(50, "min length 3 and max is 50"),
  lastName: yup.string().required("Last name is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must contain only digits")
    .min(9, "Phone number must be at least 9 digits")
    .max(15, "Phone number can't be more than 15 digits"),
  countryCode: yup.string().required("Country code is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const SignInschema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  password: yup.string().required("Password is required"),
});
