import * as yup from "yup";

export const baseurl = "https://gigamoni-backend.onrender.com/api/v1";

export const loginValidate = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  password: yup.string().required("Please fill up this field"),
});

const phoneRegExp =
  /^((\+[0-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#;:])[A-Za-z\d@$!%*?&#;:]{8,}$/;
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
    .max(15, "too long"),
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

export const forgotValidate = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
});

export const newpasswordValidate = yup.object().shape({
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

export const sendmoney = yup.object().shape({
  name: yup.string().required("Please fill up this field"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  phonenumber: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  country: yup.string().required("Please fill up this field"),
  receivingcountry: yup.string().required("Please fill up this field"),
  receivingcurrency: yup.string().required("Please fill up this field"),
  localcurrency: yup.string().required("Please fill up this field"),
  sendamount: yup.number().required("Please fill up this field"),
});

export const pendingValidate = yup.object().shape({
  receivername: yup.string().required("Please fill up this field"),
  bankName: yup.string().required("Please fill up this field"),
  phoneNumber: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  bankAddress: yup.string().required("Please fill up this field"),
  emailAddress: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  iban: yup.string().required("Please fill up this field"),
  accountName: yup.string().required("Please fill up this field"),
  swiftCode: yup.string().required("Please fill up this field"),
  accountNumber: yup.string().required("Please fill up this field"),
  receivingCountry: yup.string().required("Please fill up this field"),
  tractionDescription: yup.string().required("Please fill up this field"),
  receivingcurrency: yup.string().required("Please fill up this field"),
  sendingcurrency: yup.string().required("Please fill up this field"),
  // amountsent: yup.number().required("Please fill up this field"),
  amountReceived: yup.number().required("Please fill up this field"),
});
export const beneficiaryValidate = yup.object().shape({
  receivername: yup.string().required("Please fill up this field"),
  bankName: yup.string().required("Please fill up this field"),
  phoneNumber: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  bankAddress: yup.string().required("Please fill up this field"),
  emailAddress: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  iban: yup.string().required("Please fill up this field"),
  accountName: yup.string().required("Please fill up this field"),
  swiftCode: yup.string().required("Please fill up this field"),
  accountNumber: yup.string().required("Please fill up this field"),
  country: yup.string().required("Please fill up this field"),
 
});

export const updateValidate = yup.object().shape({
  receivername: yup.string().required("Please fill up this field"),
  bankName: yup.string().required("Please fill up this field"),
  phoneNumber: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  bankAddress: yup.string().required("Please fill up this field"),
  emailAddress: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  iban: yup.string().required("Please fill up this field"),
  accountName: yup.string().required("Please fill up this field"),
  swiftCode: yup.string().required("Please fill up this field"),
  accountNumber: yup.string().required("Please fill up this field"),
  receivingCountry: yup.string().required("Please fill up this field"),
  tractionDescription: yup.string().required("Please fill up this field"),
  receivingcurrency: yup.string().required("Please fill up this field"),
  sendingcurrency: yup.string().required("Please fill up this field"),
  amountsent: yup.number().required("Please fill up this field"),
  amountReceived: yup.number().required("Please fill up this field"),
});

export const uploadfileValidate = yup.object().shape({
  transactionID: yup.string().required("Please fill up this field"),
  file: yup.string().required("Please fill up this field"),
  fileName: yup.string().required("Please fill up this field"),
});
export const updateProfile = yup.object().shape({
  name: yup.string().required("Please fill up this field"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  phoneNumber: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  // address: yup.string().required("Please fill up this field"),
  // bvn: yup.string().required("Please fill up this field"),
});

export const updatePassword = yup.object().shape({
  oldpassword: yup
    .string()
    .min(8, "password must containat least 8 characters ")
    .matches(
      passwordRegExp,
      "characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("Please fill up this field"),
  newpassword: yup
    .string()
    .min(8, "password must containat least 8 characters ")
    .matches(
      passwordRegExp,
      "characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("Please fill up this field"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("newpassword"), null], "Passwords must match")
    .required("Please fill up this field"),
});

export const addbeneficiaryValidate = yup.object().shape({
  receivername: yup.string().required("Please fill up this field"),
  bankName: yup.string().required("Please fill up this field"),
  phoneNumber: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  bankAddress: yup.string().required("Please fill up this field"),
  emailAddress: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  iban: yup.string().required("Please fill up this field"),
  accountName: yup.string().required("Please fill up this field"),
  swiftCode: yup.string().required("Please fill up this field"),
  accountNumber: yup.string().required("Please fill up this field"),
  country: yup.string().required("Please fill up this field"),
});
