import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [btnText, setBtnText] = useState("Log In");
  const [errorMessage, setErrorMessage] = useState("");
  const passRef = useRef<HTMLInputElement>(null); // Properly initialize useRef for input
  const navigate = useNavigate();

  // Function to handle navigation
  function handleNavigation(path: string) {
    navigate(path);
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBtnText("Loading...");
    setErrorMessage("");

    // Access password value from the ref
    const password = passRef.current?.value || ""; // Fallback to an empty string if null

    const userData = {
      username: userName,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        userData
      );

      console.log("Login Response:", response);

      // Save user data and redirect
      navigate("/home");
    } catch (err: any | AxiosError) {
      if (axios.isAxiosError(err)) {
        // Handle Axios-specific errors
        setErrorMessage(
          err.response?.data?.error || "Something went wrong. Try again."
        );
      } else {
        // Handle general errors
        setErrorMessage("Something went wrong. Try again.");
      }
      console.error("Login Error:", err);
    } finally {
      setBtnText("Log In");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-6">
          <div className="hlLogo mx-auto bg-gray-300 rounded-full h-16 w-16"></div>
          <h1 className="text-2xl font-bold mt-4">Log In</h1>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              id="userName"
              name="userName"
              placeholder="Username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              ref={passRef}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {errorMessage && (
            <div className="text-red-600 text-sm mb-4">{errorMessage}</div>
          )}
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            {btnText}
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <span
              className="text-indigo-500 hover:underline cursor-pointer"
              onClick={() => handleNavigation("/signUp")}
            >
              Sign up
            </span>
          </p>
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">Get the app.</p>
      </div>
    </div>
  );
};

export default Login;
