import { MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import { ProductSchema } from "../../../validators/productValidation";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createProduct, updateProduct } from "../../../redux/slices/ShopSlice";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../components/partials/Loading";
import { getAllCategories } from "../../../redux/slices/catSlice";

export default function ShopForm() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const action = location.state || "create";
  const { loading: loadingShop, product } = useSelector((state) => state.shop);
  const { categories } = useSelector((state) => state.categories);
  const formik = useFormik({
    initialValues:
      action === "create"
        ? {
            label: "",
            brand: "",
            quantity: "",
            unitPrice: "",
            productPicture: "",
            category: null,
            description: "",
          }
        : {
            id: product._id,
            label: product.label,
            brand: product.brand,
            quantity: product.quantity,
            unitPrice: product.unitPrice,
            productPicture: product.productPicture,
            category: product.category._id,
            description: product.description,
          },
    validationSchema: ProductSchema,
    onSubmit: (values, actions) => {
      // alert(JSON.stringify(values));
      if (action === "create") {
        dispatch(createProduct(values));
      }
      if (action === "update") {
        dispatch(updateProduct(values));
      }
      navigate("/shop_table");
    },
  });
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className="px-10 py-5 h-screen overflow-hidden">
      <div className="bg-border/20 h-full rounded-xl flex flex-col p-3 gap-5">
        <div className="border-b-4 py-1 border-border h-14 pr- flex justify-between">
          <p className="font-bold text-4xl capitalize">
            {action === "create" ? "Add Product" : "Update " + product.label}
          </p>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="w-full h-full  rounded-xl overflow-y-auto p-5"
        >
          {loadingShop ? (
            <Loading />
          ) : (
            <>
              <div className="flex gap-5 py-5">
                <TextField
                  fullWidth
                  id="label"
                  name="label"
                  label="Product Label"
                  color="secondary"
                  value={formik.values.label}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.label && Boolean(formik.errors.label)}
                  helperText={formik.touched.label && formik.errors.label}
                />
                <TextField
                  className="text-white"
                  fullWidth
                  id="brand"
                  name="brand"
                  label="Product Brand"
                  color="secondary"
                  value={formik.values.brand}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.brand && Boolean(formik.errors.brand)}
                  helperText={formik.touched.brand && formik.errors.brand}
                />
                <TextField
                  fullWidth
                  id="quantity"
                  name="quantity"
                  label="Product Quantity"
                  color="secondary"
                  value={formik.values.quantity}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.quantity && Boolean(formik.errors.quantity)
                  }
                  helperText={formik.touched.quantity && formik.errors.quantity}
                />
              </div>
              <div className="flex gap-5">
                <TextField
                  fullWidth
                  id="unitPrice"
                  name="unitPrice"
                  label="Product Price"
                  color="secondary"
                  value={formik.values.unitPrice}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.unitPrice && Boolean(formik.errors.unitPrice)
                  }
                  helperText={
                    formik.touched.unitPrice && formik.errors.unitPrice
                  }
                />
                <div className="w-full">
                  <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="category"
                    placeholder="Categories"
                    value={formik.values.category}
                    onChange={(e) => {
                      formik.setFieldValue("category", e.target.value);
                    }}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.category && Boolean(formik.errors.category)
                    }
                    helperText={
                      formik.touched.category && formik.errors.category
                    }
                  >
                    <MenuItem disabled>
                      <em>Category</em>
                    </MenuItem>
                    {categories && categories.map((cat) => (
                      <MenuItem key={cat._id} value={cat._id}>
                        {cat.name}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <div className="relative w-full min-w-[200px]">
                  <FileBase
                    type="file"
                    name="productPicture"
                    multiple={false}
                    onDone={({ base64 }) =>
                      formik.setFieldValue("productPicture", base64)
                    }
                  />
                  <div className="text-left pl-4 text-sm text-red mt-1">
                    {formik.touched.productPicture &&
                      formik.errors.productPicture}
                  </div>
                </div>
              </div>
              <div className="w-full py-5">
                <ReactQuill
                  onChange={(e) => formik.setFieldValue("description", e)}
                  value={formik.values.description}
                  theme="snow"
                  style={{ height: "280px" }}
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
