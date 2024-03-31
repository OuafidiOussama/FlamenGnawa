import * as yup from "yup";

export const CategoryCreateSchema = yup.object({
  name: yup
    .string("Enter Your Category Name")
    .required("Category Name Is Required"),
  categoryPicture: yup
    .string("Enter Your Category Picture")
    .required("Category Picture Is Required"),
  description: yup
    .string("Enter Your Category description")
    .required("Category description Is Required"),
});
export const CategoryUpdateSchema = yup.object({
  name: yup
    .string("Enter Your Category Name")
    .required("Category Name Is Required"),
  categoryPicture: yup
    .string("Enter Your Category Picture")
    .required("Category Picture Is Required"),
  description: yup
    .string("Enter Your Category description")
    .required("Category description Is Required"),
});
