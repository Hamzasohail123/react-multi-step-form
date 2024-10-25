// validationSchema.js
import * as Yup from 'yup';
import { object, string, number, date, InferType,ref } from "yup";


export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required')
    .min(2, 'First Name must be at least 2 characters long'),
  lastName: Yup.string()
    .required('Last Name is required')
    .min(2, 'Last Name must be at least 2 characters long'),
  email: Yup.string()
    .required('Email Address is required')
    .email('Invalid email format'),
  gender: Yup.string().required('Gender is required'),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^\d+$/, 'Phone number must be digits only'),
  country: Yup.string().required('Country is required'),
});
