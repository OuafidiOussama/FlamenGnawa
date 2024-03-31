import * as yup from "yup";

export const BlogSchema = yup.object({
    title: yup
    .string("Enter Your Article Title")
    .required("Article Title Is Required"),
    postPicture: yup
    .string("Enter Your Article Picture")
    .required("Article Picture Is Required"),
    content: yup
    .string("Enter Your Article Content")
    .required("Article Content Is Required"),
});
