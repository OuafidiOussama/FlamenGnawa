import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { BlogSchema } from "../../../validators/blogValidation";
import { createArticle, updateArticle } from "../../../redux/slices/blogSlice";
import { Icon } from "@iconify/react";
import ReactQuill from "react-quill";
import FileBase from "react-file-base64";
import Loading from "../../../components/partials/Loading";
import { TextField } from "@mui/material";


export default function BlogForm() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const action = location.state || "create";
  const { loading, article } = useSelector((state) => state.blog);
  const formik = useFormik({
    initialValues:
      action === "create"
        ? {
            title: "",
            postPicture: "",
            content: "",
          }
        : {
            id: article._id,
            title: article.title,
            postPicture: article.postPicture,
            content: article.content,
          },
    validationSchema: BlogSchema,
    onSubmit: (values, actions) => {
      // alert(JSON.stringify(values));
      if (action === "create") {
        dispatch(createArticle(values));
      }
      if (action === "update") {
        dispatch(updateArticle(values));
      }
      navigate("/blog_table");
    },
  });
  return (
    <div className="px-10 py-5 h-screen overflow-hidden">
      <div className="bg-border/20 h-full rounded-xl flex flex-col p-3 gap-5">
        <div className="border-b-4 py-1 border-border h-14 pr- flex justify-between">
          <p className="font-bold text-4xl capitalize">
            {action === "create" ? "Add Article" : "Update " + article.name}
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
              <div className="flex gap-5">
                <TextField
                  fullWidth
                  id="title"
                  name="title"
                  label="Article Title"
                  color="secondary"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.title && Boolean(formik.errors.title)
                  }
                  helperText={
                    formik.touched.title && formik.errors.title
                  }
                />
                <div className="flex flex-col justify-center relative w-full min-w-[200px]">
                  <FileBase
                    type="file"
                    name="postPicture"
                    multiple={false}
                    onDone={({ base64 }) =>
                      formik.setFieldValue("postPicture", base64)
                    }
                  />
                  <div className="text-left pl-4 text-sm text-red mt-1">
                    {formik.touched.postPicture &&
                      formik.errors.postPicture}
                  </div>
                </div>
              </div>
              <div className="w-full py-5">
                <ReactQuill
                  onChange={(e) => formik.setFieldValue("content", e)}
                  value={formik.values.content}
                  theme="snow"
                  style={{ height: "380px" }}
                />
                <div className="text-left pl-4 text-sm text-red mt-1">
                  {formik.touched.content && formik.errors.content}
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
