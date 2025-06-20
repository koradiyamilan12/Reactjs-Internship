import * as Yup from "yup";

export const PostSchema = Yup.object({
  title: Yup.string().required("Enter Post Title"),
  description: Yup.string().required("Enter Post Description"),
});
