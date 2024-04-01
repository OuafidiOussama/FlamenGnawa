import React from "react";
import { MemberSchema } from "../../../validators/memberValidation";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { createMember, updateMember } from "../../../redux/slices/memberSlice";
import { Icon } from "@iconify/react";
import ReactQuill from "react-quill";
import FileBase from "react-file-base64";
import { TextField } from "@mui/material";
import Loading from "../../../components/partials/Loading";

export default function MemberForm() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const action = location.state || "create";
  const { loading, member } = useSelector((state) => state.members);
  const formik = useFormik({
    initialValues:
      action === "create"
        ? {
            firstName: "",
            lastName: "",
            profil_picture: "",
            email: "",
            password: "",
            phone: null,
            role: "member",
            quote: "",
            instrument: "",
          }
        : {
            id: member._id,
            firstName: member.user.first_name,
            lastName: member.user.last_name,
            profil_picture: member.user.profil_picture,
            email: member.user.email,
            password: member.user.password,
            phone: member.user.phone,
            quote: member.quote,
            instrument: member.instrument,
          },
    validationSchema: MemberSchema,
    onSubmit: (values, actions) => {
      // alert(JSON.stringify(values));
      if (action === "create") {
        dispatch(createMember(values));
      }
      if (action === "update") {
        dispatch(updateMember(values));
      }
      navigate("/members_table");
    },
  });

  return (
    <div className="px-10 py-5 h-screen overflow-hidden">
      <div className="bg-border/20 h-full rounded-xl flex flex-col p-3 gap-5">
        <div className="border-b-4 py-1 border-border h-14 pr- flex justify-between">
          <p className="font-bold text-4xl capitalize">
            {action === "create"
              ? "Add Member"
              : "Update " +
                member.user.first_name +
                " " +
                member.user.last_name}
          </p>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="w-full h-full  rounded-xl overflow-y-auto p-5"
        >
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="flex gap-5 py-5">
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  color="secondary"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
                <TextField
                  className="text-white"
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  color="secondary"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
                <TextField
                  className="text-white"
                  fullWidth
                  id="instrument"
                  name="instrument"
                  label="Instrument"
                  color="secondary"
                  value={formik.values.instrument}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.instrument &&
                    Boolean(formik.errors.instrument)
                  }
                  helperText={
                    formik.touched.instrument && formik.errors.instrument
                  }
                />
                {action === "create" ? (
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    color="secondary"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="flex gap-5">
              {action === "create" ? (
                  <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  color="secondary"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                ) : (
                  ""
                )}
                <TextField
                  fullWidth
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  color="secondary"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
                <div className="flex flex-col justify-center relative w-full min-w-[200px]">
                  <FileBase
                    type="file"
                    name="profil_picture"
                    multiple={false}
                    onDone={({ base64 }) =>
                      formik.setFieldValue("profil_picture", base64)
                    }
                  />
                  <div className="text-left pl-4 text-sm text-red mt-1">
                    {formik.touched.profil_picture &&
                      formik.errors.profil_picture}
                  </div>
                </div>
              </div>
              <div className="w-full py-5">
                <ReactQuill
                  onChange={(e) => formik.setFieldValue("quote", e)}
                  value={formik.values.quote}
                  theme="snow"
                  style={{ height: "280px" }}
                />
                <div className="text-left pl-4 text-sm text-red mt-1">
                  {formik.touched.quote && formik.errors.quote}
                </div>
              </div>
              <div className="flex justify-end w-full pt-8">
                <button
                  className="flex items-center gap-2 bg-purple text-white py-2 px-5 rounded"
                  type="submit"
                >
                  <Icon icon="material-symbols:save" />
                  SUBMIT
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
