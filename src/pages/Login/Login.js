import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { toast } from "react-toastify";

import loginUser from "~/services/apiLoginUserService";
import config from "~/config";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const [typePassword, setTypePassword] = useState("password");

  const navigate = useNavigate();

  // Xử lý khoảng trắng đầu tiên
  const handleEmail = (e) => {
    const emailValue = e.target.value;
    if (!emailValue.startsWith(" ")) {
      setEmail(emailValue);
    }
  };

  const handleSubmitLogin = async () => {
    // validate
    const emailVaidate = email.trim();

    // call api
    const data = await loginUser(emailVaidate, password);

    if (data.EC === 0) {
      // toast.success(data.EM);
      navigate(config.routes.home);
    } else {
      toast.error(data.EM);
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <span className="header-desc">{"Don't have an account yet?"}</span>
        <button className="btn btn-dark">Sign up</button>
      </div>

      <div className="login-body">
        <div className="login-wapper">
          <h2 className="login-heading">Quiz</h2>

          <div className="login-content">
            <p className="login-title">{"Hello, who's this?"}</p>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                type="text"
                className="form-control"
                placeholder="abc@gmail.com"
                id="email"
                onChange={handleEmail}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                type={typePassword}
                className="form-control"
                placeholder="Enter password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {!showpassword && (
                <div
                  className=" eyes show-password"
                  onClick={() => {
                    setShowPassword(!showpassword);
                    setTypePassword("text");
                  }}
                >
                  <IoEyeSharp />
                </div>
              )}
              {showpassword && (
                <div
                  className="eyes hide-password"
                  onClick={() => {
                    setShowPassword(!showpassword);
                    setTypePassword("password");
                  }}
                >
                  <FaEyeSlash />
                </div>
              )}
            </div>
            <span className="forgotpasword">Forgot password?</span>
            <button className="btn btn-dark" onClick={handleSubmitLogin}>
              Log in to Quiz
            </button>
          </div>

          <p
            style={{ textAlign: "center", cursor: "pointer" }}
            onClick={() => navigate(config.routes.home)}
          >
            &#60; &#60; Go to Homepage
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
