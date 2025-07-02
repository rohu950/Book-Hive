import React from "react";
import { useAuth } from "../../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      /* 1. wipe auth state */
      setAuthUser({ ...authUser, user: null });
      localStorage.removeItem("Users");

      /* 2. toast */
      toast.success("Logged out successfully!");

      /* 3. close modal if it exists */
      document.getElementById("my_modal_3")?.close();

      /* 4. reload after a short delay so the toast is shown */
      setTimeout(() => window.location.reload(), 800);
    } catch (error) {
      toast.error("Error: " + (error.message || "Unknown"));
    }
  };

  return (
    <button
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;
