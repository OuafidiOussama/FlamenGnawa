import * as yup from "yup";

export const MemberSchema = yup.object({
  firstName: yup
    .string("Enter Your Member First Name")
    .required("Member First Name Is Required"),
  lastName: yup
    .string("Enter Your Member Last name")
    .required("Member Last name Is Required"),
  profil_picture: yup
    .string("Enter Your Member Profil Picture")
    .required("Member Profil Picture Is Required"),
  email: yup
    .string("Enter Your Email")
    .email("Enter A Valid Email")
    .required("Email Is Required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid Email Format"),
  password: yup
    .string("Enter Your Password")
    .min(6, "Password Should Be At Least 6 Characters")
    .required("Password Is Required"),
  phone: yup
    .number("Enter Your Phone Number")
    .required("Phone Number Is Required"),
  quote: yup
    .string("Enter Your Member Quote")
    .required("Member Quote Is Required"),
  instrument: yup
    .string("Enter Your Member instrument")
    .required("Member instrument Is Required"),
});
