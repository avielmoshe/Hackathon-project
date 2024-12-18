import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [btnText, setBtnText] = useState("Log In");
  const [errorMessage, setErrorMessage] = useState("");
  const passRef: React.MutableRefObject<string> = useRef();
  const navigate = useNavigate();

  // handle functions
  function handleNavigation(path: string) {
    navigate(path);
  }

  const handleFormSubmit = async (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault();
    setBtnText("Loading...");
    setErrorMessage("");

    const userData = {
      username: userName,
      password: passRef.current.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        userData
      );

      console.log("Login Response:", response);

      // Save user data to cookies or state
      //   Cookies.set("user", JSON.stringify(response.data.user), { expires: 7 });

      navigate("/home");
    } catch (err) {
      setErrorMessage(
        err.response?.data?.error || "Something went wrong. Try again."
      );
      console.error("Login Error:", err);
    } finally {
      setBtnText("Log In");
    }
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <div className="backgroundImage"></div>
        </div>
        <div className="right">
          <div className="topRight">
            <div className="hlLogo"></div>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="userName"></label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                id="userName"
                name="userName"
                placeholder="username"
              />
              {/* Password */}
              <label htmlFor="password"> </label>
              <input
                ref={passRef}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <button type="submit">{btnText}</button>
              {errorMessage && (
                <div className="errorMessage">{errorMessage}</div>
              )}
            </form>
          </div>
          <div className="bottom-right-container">
            <div className="bottom-right">
              <p className="p">
                Don't have an account
                <span
                  className="changePagesButton"
                  onClick={(e) => handleNavigation("/sign-up")}
                >
                  Sign up
                </span>
              </p>
            </div>
          </div>
          <p className="p"> Get the app.</p>
        </div>
      </div>
    </>
  );
};

export default Login;
