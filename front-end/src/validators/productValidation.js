import * as yup from "yup";

export const ProductSchema = yup.object({
  label: yup
    .string("Enter Your Product Label")
    .required("Product Label Is Required"),
  brand: yup
    .string("Enter Your Product Brand")
    .required("Product Brand Is Required"),
  quantity: yup
    .string("Enter Your Product Quantity")
    .required("Product Quantity Is Required"),
  unitPrice: yup
    .number("Enter Your Product Price")
    .required("Product Price Is Required"),
  productPicture: yup
    .string("Enter Your Product Picture")
    .required("Product Picture Is Required"),
  category: yup
    .string("Enter Your Product category")
    .required("Product category Is Required"),
  description: yup
    .string("Enter Your Product description")
    .required("Product description Is Required"),
});
