import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("email is required"),
  password: Yup.string()
    .required("password is required")
    .min(6, "Password must be at least 6 characters"),
});

const LoginInitialValues = {
  email: "",
  password: "",
};

export { LoginInitialValues, LoginSchema };
