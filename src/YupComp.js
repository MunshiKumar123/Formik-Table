import * as Yup from "yup";

export const YupComp = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(15, "Must be 15 characters or less")
    .required("Please Enter the FirstName"),

  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Please Enter the LastName"),

  phone: Yup.string()
    .min(10)
    .max(10, "Must be 12 characters or less")
    .required("Please Enter the Phone Number"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Please Enter the Email id"),

  password: Yup.string()
    .max(8, "Must be 8 characters")
    .required("Please Enter the Password"),

  gender: Yup.string().required("gender is Required!"),

  date: Yup.string().required("Please select Date"),

  city: Yup.string().required("Please select City"),
  about: Yup.string().required("write something about yourself"),
});
