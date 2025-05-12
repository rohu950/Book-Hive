import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    // You could close modal or navigate here after login
  };

  const handleClose = () => {
    const dialog = document.getElementById('my_modal_3');
    if (dialog) dialog.close();
  };

  useEffect(() => {
    const dialog = document.getElementById('my_modal_3');
    if (dialog && !dialog) dialog.showModal();
  }, []);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <h3 className="font-bold text-lg">Login</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="mt-4 space-y-2 ">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white dark:border "
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            {/* Password Field */}
            <div className=" mt-4 space-y-2 ">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password "
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white dark:border "
                {...register("password", { required: true })}
              />
              <br/>
              {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            {/* Buttons and Signup Link */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 "
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
    </div>
  );
}

export default Login;
