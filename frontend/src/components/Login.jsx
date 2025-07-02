import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  /* helpers */
  const closeModal = () => document.getElementById("my_modal_3")?.close();
  const openModal  = () => document.getElementById("my_modal_3")?.showModal();

  /* expose openModal globally (optional) */
  React.useEffect(() => {
    window.openLoginModal = openModal;
    return () => delete window.openLoginModal;
  }, []);

  /* submit */
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/login", {
        email: data.email,
        password: data.password,
      });

      toast.success("Logged-in successfully!");

      /* wait a bit so the toast is seen, then close + reload */
      setTimeout(() => {
        closeModal();
        window.location.reload();
      }, 800);

      localStorage.setItem("Users", JSON.stringify(res.data.user));
    } catch (err) {
      toast.error("Error: " + (err.response?.data?.message || err.message));
    }
  };

  /* render */
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box dark:bg-slate-900 dark:text-white">
        <button
          onClick={closeModal}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          type="button"
        >
          ✕
        </button>

        <h3 className="font-bold text-lg">Login</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email */}
          <div className="mt-4 space-y-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white dark:border"
              {...register("email", { required: true })}
            />
            <br/>
            {errors.email && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* password */}
          <div className="mt-4 space-y-2">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white dark:border"
              {...register("password", { required: true })}
            />
            <br/>
            {errors.password && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* actions */}
          <div className="flex justify-around mt-4">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
            >
              Login
            </button>
            <p>
              Not registered?{" "}
              <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
