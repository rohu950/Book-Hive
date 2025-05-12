import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // adjust the path if needed
import Footer from './Footer'; // adjust the path if needed

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log('Contact Form Data:', data);
    alert("Message sent successfully!");
    reset();
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-slate-950 flex justify-center items-center px-4 py-10 transition-colors duration-300">
        <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">
          <Link
            to="/"
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-full hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            title="Back to Home"
          >
            ✕
          </Link>

          <h2 className="text-3xl font-semibold mb-6 text-center text-black dark:text-white">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white outline-none"
                {...register("name", { required: true })}
              />
              {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 dark:text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 dark:text-gray-300">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white outline-none resize-none"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
            </div>

            <div className="flex justify-start mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition duration-200"
              >
                Send
              </button>
            </div>

            {isSubmitSuccessful && (
              <p className="text-green-500 text-center text-sm mt-4">Thank you for contacting us!</p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
