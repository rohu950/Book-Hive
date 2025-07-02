import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  /* ───────── router helpers ───────── */
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  /* ───────── react-hook-form ───────── */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* ───────── theme on load ───────── */
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  /* ───────── close buttons send home ───────── */
  const goHome = () => navigate("/");

  /* ───────── signup submit ───────── */
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/signup", data);
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      toast.success("Signup successful!");

      /* 1️⃣ navigate (SPA) */
      navigate(from, { replace: true });

      /* 2️⃣ force hard reload so global state resets */
      setTimeout(() => window.location.reload(), 800);
    } catch (err) {
      const msg = err.response?.data?.message || err.message || "Unknown error";
      toast.error("Error: " + msg);
    }
  };

  /* ───────── UI ───────── */
  return (
    <>
    <div className="flex h-screen items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* signup card */}
      <div className="w-[600px] border-2 dark:border-gray-700 bg-white dark:bg-slate-900 text-black dark:text-white shadow-lg p-5 rounded-md hover:shadow-xl transition-all relative">
        {/* ✕ close -> home */}
        <button
          type="button"
          onClick={goHome}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        <h3 className="font-bold text-lg">Signup</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-800 dark:text-white"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-800 dark:text-white"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-800 dark:text-white"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700"
            >
              Signup
            </button>
            <span
              className="underline text-blue-500 cursor-pointer text-sm"
              onClick={() => document.getElementById("login_modal")?.showModal()}
              
            >
              Already have an account? Login
            </span>
          </div>
        </form>
      </div>

      {/* login modal */}
      <dialog id="login_modal" className="modal">
        <div className="modal-box w-full max-w-md p-6 rounded-md shadow-xl dark:bg-slate-900 dark:text-white bg-white text-black">
          {/* ✕ close -> home */}
          <button
            type="button"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={goHome}
          >
            ✕
          </button>

          <h3 className="text-lg font-bold mb-4">Login</h3>

          {/* quick stub form */}
          <form className="flex flex-col gap-4" method="dialog">
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
        </div>
      </dialog>
    </div>
    </>
  );
}

export default Signup;
