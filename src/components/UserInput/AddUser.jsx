import { Input } from "antd";
import axios from "axios";
import { useFormik } from "formik";

const AddUser = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      axios.post(`${import.meta.env.VITE_API_BASE_URL}/add-user`, { values });
      console.log(values);
      formik.resetForm();
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex gap-5 justify-center">
          <div className="w-1/4">
            <label>Name</label>
            <Input
              type="text"
              name="name"
              value={formik?.values?.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="w-1/4">
            <label>Email</label>
            <Input
              type="email"
              name="email"
              value={formik?.values?.email}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="text-center py-5">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
