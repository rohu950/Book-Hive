import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    // Handle actual signup here
  };

  return (
    <>
      {/* Signup Box */}
      <div className="flex h-screen items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="w-[600px] border-[2px] dark:border-gray-700 bg-white dark:bg-slate-900 text-black dark:text-white h-auto shadow-lg p-5 rounded-md relative hover:shadow-xl transition-all">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>

            {/* Name */}
            <div className="mt-4 space-y-2">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md outline-none dark:text-white"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md outline-none dark:text-white"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md outline-none dark:text-white"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            {/* Signup Button & Login Link */}
            <div className="flex justify-between items-center mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
              >
                Signup
              </button>
              <p className="text-sm">
                Have an account?{" "}
                <span
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("login_modal").showModal()}
                >
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Login Modal */}
      <dialog id="login_modal" className="modal">
        <div className="modal-box w-full max-w-md p-6 rounded-md shadow-xl dark:bg-slate-900 dark:text-white bg-white text-black">
          <form method="dialog">
            <Link to="/" className="btn btn-sm btn-circle absolute right-2 top-2">✕</Link>
          </form>

          <h3 className="text-lg font-bold mb-4">Login</h3>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            No account?{" "}
            <span
              className="underline text-blue-500 cursor-pointer"
              onClick={() => document.getElementById("login_modal").close()}
            >
              Sign up
            </span>
          </p>
        </div>
      </dialog>
    </>
  );
}

export default Signup;
