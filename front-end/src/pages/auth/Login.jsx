import React, { useEffect, useState } from "react";
import bg from "../../assets/flamengnawa_merch.png";
import { TextField } from "@mui/material";
import { Icon } from "@iconify/react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";
import { useFormik } from "formik";
import { loginSchema } from "../../validators/authValidation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, isAuthenticated, user } = useSelector((state) => state.auth);
  const { email } = location.state || {};

  useEffect(() => {
    if (isAuthenticated) {
      if (user.role === "super") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    }
  });

  const formik = useFormik({
    initialValues: {
      email: email || "", 
      password:"",
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      dispatch(login(values));
      actions.resetForm();
    },
  });
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const toggleVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };
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
            <span className="text-red">L</span>ogin
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full h-full flex flex-col justify-center gap-6"
          >
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
            <div className="w-full flex justify-between items-center">
              <p className="text-black font-thin text-xs">
                don't have an account?{" "}
                <NavLink
                  to={PathConstants.REGISTER}
                  className="underline hover:text-red dduration-300 transition-all"
                >
                  Register
                </NavLink>
              </p>
              <button className="bg-red h-10 w-40 rounded-lg" type="submit">
                {loading ? <CircularProgress /> : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
