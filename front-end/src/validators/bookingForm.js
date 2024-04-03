import * as yup from "yup";

export const bookingSchema = yup.object({
    firstName: yup
    .string("Enter Your First Name")
    .required("First Name Is Required"),
    lastName: yup
    .string("Enter Your Last Name")
    .required("Last Name Is Required"),
    phone: yup
    .string("Enter Your Phone Number")
    .required("Phone Number Is Required"),
    email: yup
    .string("Enter Your Email")
    .email("Enter A Valid Email")
    .required("Email Is Required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid Email Format"),
});
