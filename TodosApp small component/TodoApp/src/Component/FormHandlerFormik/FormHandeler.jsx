import { useFormik } from "formik";

const FormHandeler = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default FormHandeler;
