import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    phone: "",
    role: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  // Navigation functions
  function handleLogin() {
    navigate(-1);
  }

  const handleRoleToggle = (selectedRole: string) => {
    setFormData((prevData) => ({
      ...prevData,
      role: prevData.role === selectedRole ? "" : selectedRole,
    }));
  };

  // Handle input changes
  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (Object.values(formData).some((field) => !field.trim())) {
      setMessage({ type: "error", text: "All fields are required!" });
      return;
    }

    console.log(formData);

    if (formData.password.length < 6) {
      setMessage({
        type: "error",
        text: "Password must be at least 6 characters long!",
      });
      return;
    }
    registerUser();
  };

  const registerUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/sign-up",
        formData
      );
      console.log(response);

      setMessage({
        type: "success",
        text: "Signup successful! Redirecting...",
      });
      setTimeout(() => navigate(-1), 2000);
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.error || "Something went wrong. Try again.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-6">
          <div className="hlLogo mx-auto bg-gray-300 rounded-full h-16 w-16"></div>
          <h1 className="text-black-600 mt-4">
            Sign up so you can easily help improve our community.
          </h1>
        </div>
        {message.text && (
          <p
            className={`text-sm text-center mb-4 ${
              message.type === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {message.text}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="phone"
              type="number"
              placeholder="Mobile number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="name"
              type="text"
              placeholder="Full name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* Role Toggle Buttons */}
          <div className="flex justify-center mt-4 gap-4">
            <button
              type="button"
              onClick={() => handleRoleToggle("customer")}
              className={`w-32 h-10 ${
                formData.role === "customer"
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 text-gray-600"
              } hover:bg-gray-300 rounded-lg flex items-center justify-center`}
            >
              Customer
            </button>
            <button
              type="button"
              onClick={() => handleRoleToggle("provider")}
              className={`w-32 h-10 ${
                formData.role === "provider"
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 text-gray-600"
              } hover:bg-gray-300 rounded-lg flex items-center justify-center`}
            >
              Provider
            </button>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            People who use our service may have uploaded your contact
            information to Instagram.{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Learn More
            </span>
          </p>
          <p className="text-xs text-gray-500 mb-4">
            By signing up, you agree to our{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Terms
            </span>
            ,{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Privacy Policy
            </span>
            , and{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Cookies Policy
            </span>
            .
          </p>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Sign up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Have an account?{" "}
            <span
              className="text-indigo-500 hover:underline cursor-pointer"
              onClick={handleLogin}
            >
              Log in
            </span>
          </p>
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">Get the app.</p>
      </div>
    </div>
  );
};

export default SignUp;
