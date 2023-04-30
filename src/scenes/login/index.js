import { useFormik } from "formik";
import { LoginInitialValues, LoginSchema } from "../../schema";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: LoginInitialValues,
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const loginUserObj = { email: values.email, password: values.password };
      try {
        const LoginUser = await axios.post(
          `http://localhost:5000/user/login`,
          loginUserObj
        );
        if (LoginUser?.status === 200) {
          navigate("/dashboard", { state: LoginUser?.data });
        }
      } catch (error) {
        alert(error?.message);
      }
    },
  });
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src="https://wallpaperaccess.com/full/4657489.jpg"
        alt="/"
      />

      <div className="flex justify-center items-center h-full ">
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-8 rounded-md"
          onSubmit={formik.handleSubmit}
        >
          <h2 className="text-4xl font-bold text-center py-4">TAKEAWAY</h2>
          <div className="flex flex-col mb-4">
            <label>Email</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-600">{formik.errors.email}</span>
            )}
          </div>

          <div className="flex flex-col ">
            <label>Password</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="text-red-600">{formik.errors.password}</span>
            )}
          </div>

          <button
            className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white"
            onClick={formik.submitForm}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
