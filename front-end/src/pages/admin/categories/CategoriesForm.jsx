import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CategoryCreateSchema,
  CategoryUpdateSchema,
} from "../../../validators/categoryValidation";
import { TextField } from "@mui/material";
import { Icon } from "@iconify/react";
import FileBase from "react-file-base64";
import ReactQuill from "react-quill";
import { createCategory, updateCategory } from "../../../redux/slices/catSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../components/partials/Loading";

export default function CategoriesForm() {
  const dispatch = useDispatch();
  const location = useLocation();
  const action = location.state || "create";
  const { loading, category } = useSelector((state) => state.categories);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues:
      action === "create"
        ? { name: "", description: "", categoryPicture: "" }
        : {
            id: category._id,
            name: category.name,
            description: category.description,
            categoryPicture: category.categoryPicture,
          },
    validationSchema:
      action === "create" ? CategoryCreateSchema : CategoryUpdateSchema,
    onSubmit: (values, actions) => {
      if (action === "create") {
        dispatch(createCategory(values));
      }
      if (action === "update") {
        // alert(JSON.stringify(values));
        dispatch(updateCategory(values));
      }
      navigate("/categories_table");
    },
  });
  return (
    <div className="px-10 py-5 h-screen overflow-hidden">
      <div className="bg-border/20 h-full rounded-xl flex flex-col p-3 gap-5">
        <div className="border-b-4 py-1 border-border h-14 pr- flex justify-between">
          <p className="font-bold text-4xl capitalize">
            {action === "create" ? "Add Category" : "Update " + category.name}
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
              <div className="flex gap-5 items-center">
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Category Name"
                  color="secondary"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <div className="relative w-full min-w-[200px]">
                  <FileBase
                    type="file"
                    name="categoryPicture"
                    multiple={false}
                    onDone={({ base64 }) =>
                      formik.setFieldValue("categoryPicture", base64)
                    }
                  />
                  <div className="text-left pl-4 text-sm text-red mt-1">
                    {formik.touched.categoryPicture &&
                      formik.errors.categoryPicture}
                  </div>
                </div>
              </div>
              <div className="w-full py-5">
                <ReactQuill
                  value={formik.values.description}
                  onChange={(e) => formik.setFieldValue("description", e)}
                  theme="snow"
                  style={{ height: "380px" }}
                />
                <div className="text-left pl-4 text-sm text-red mt-1">
                  {formik.touched.description && formik.errors.description}
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
