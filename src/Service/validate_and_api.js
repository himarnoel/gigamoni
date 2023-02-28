import * as yup from "yup";
export const loginValidate = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  password: yup.string().required("Please fill up this field"),
});
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const signupValidate = yup.object().shape({
  name: yup.string().required("Please fill up this field"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  phonenumber: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(11, "too long"),
  country: yup.string().required("Please fill up this field"),
  password: yup
    .string()
    .min(8, "password must containat least 8 characters ")
    .matches(
      passwordRegExp,
      "characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("Please fill up this field"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please fill up this field"),
});

export const baseurl =
  "https://gigamoni-backend.onrender.com/api/v1/accounts";
