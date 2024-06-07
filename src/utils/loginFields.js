import { emailPattern } from "./InputRules";

export const SignupFields = [
  {
    type: "input",
    name: "userfullname",
    fieldtype: "text",
    label: "Full Name",
    placeholder: "Full Name",
    inputRules: {
      required: "Fullname is required",
    },
  },
  {
    type: "input",
    name: "phonenumber",
    fieldtype: "number",
    label: "Phone Number",
    placeholder: "Enter your phonenumber",
    inputRules: {
      required: "Phone Number is required",
    },
  },
  {
    type: "input",
    name: "email",
    fieldtype: "email",
    label: "Email",
    placeholder: "Enter your email",
    inputRules: {
      required: "Email is required",
      pattern: {
        value: emailPattern,
        message: "Invalid email address",
      },
    },
  },
  {
    type: "input",
    name: "password",
    fieldtype: "password",
    label: "Password",
    placeholder: "Enter your password",
    inputRules: {
      required: "Password is required",
    },
  },
];

export const LoginFields = [
  {
    type: "input",
    name: "email",
    fieldtype: "email",
    label: "Email",
    placeholder: "Enter your email",
    inputRules: {
      required: "Email is required",
      pattern: {
        value: emailPattern,
        message: "Invalid email address",
      },
    },
  },
  {
    type: "input",
    name: "password",
    fieldtype: "password",
    label: "Password",
    placeholder: "Enter your password",
    inputRules: {
      required: "Password is required",
    },
  },
];
