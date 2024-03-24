import * as yup from 'yup'

export const loginSchema = yup.object({
    email: yup
        .string('Enter Your Email')
        .email('Enter A Valid Email')
        .required('Email Is Required')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,'Invalid Email Format'),
    password: yup
        .string('Enter Your Password')
        .min(6, 'Password Should Be At Least 6 Characters')
        .required('Password Is Required'),
})