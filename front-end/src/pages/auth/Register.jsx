import React, { useEffect, useState } from "react";
import bg from "../../assets/flamengnawa_merch.png";
import { TextField } from "@mui/material";
import { Icon } from "@iconify/react";
import { NavLink, useNavigate } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerSchema } from "../../validators/authValidation";
import { register } from "../../redux/slices/authSlice";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccessfull } = useSelector((state) => state.auth);
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const toggleVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  useEffect(() => {
    if (isSuccessfull) {
      navigate("/login", {
        state: {
          email: formik.values.email,
        },
      });
    }
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });
  return (
    <div className="h-screen w-screen flex justify-center items-center font-main">
      <div className="w-4/5 h-4/5 bg-white rounded-xl overflow-clip flex">
        <div className="w-1/2 h-full bg-dark-purple ">
          <img
            src={bg}
            alt=""
            className="w-full h-full object-cover  opacity-50"
          />
        </div>
        <div className="w-1/2 h-full bg-white flex flex-col items-center px-20 py-10">
          <p className="text-dark-purple font-bold text-5xl uppercase">
            <span className="text-red">R</span>egister
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full h-full flex flex-col justify-center gap-2"
          >
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              variant="standard"
              color="secondary"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              variant="standard"
              color="secondary"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="standard"
              color="secondary"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <div className="w-full relative">
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                variant="standard"
                color="secondary"
                type={isPasswordVisible ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Icon
                onClick={toggleVisibility}
                icon={isPasswordVisible ? "mdi:eye-off" : "mdi:eye"}
                className="text-black absolute top-4 right-2 cursor-pointer text-3xl opacity-70"
              />
            </div>
            <TextField
              id="phone"
              name="phone"
              label="Phone Number"
              variant="standard"
              color="secondary"
              type="number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <div className="w-full flex justify-between items-center">
              <p className="text-black font-thin text-xs">
                You have an account already?{" "}
                <NavLink
                  to={PathConstants.LOGIN}
                  className="underline hover:text-red dduration-300 transition-all"
                >
                  Login
                </NavLink>
              </p>
              <button className="bg-red h-10 w-40 rounded-lg" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
