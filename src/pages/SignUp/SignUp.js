import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import signUpUser from "~/services/apiSignUpUserService";
import config from "~/config";
import "./SignUp.scss";

function SignUp() {
  const [username, setUsername] = useState("");
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

  // Xử lý email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitSignUp = async () => {
    // validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid email!");
      return;
    }

    if (!password) {
      toast.error("Invalid password!");
      return;
    }

    const data = await signUpUser(email, username, password);

    if (data.EC === 0) {
      toast.success(data.EM);
      navigate(config.routes.login);
    } else {
      toast.error(data.EM);
    }
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-header">
        <span className="header-desc">{"Already have an account?"}</span>
        <button
          className="btn btn-dark"
          onClick={() => navigate(config.routes.login)}
        >
          Log in
        </button>
      </div>

      <div className="sign-up-body">
        <div className="sign-up-wapper">
          <h2 className="sign-up-heading">Quiz</h2>

          <div className="sign-up-content">
            <p className="sign-up-title">Start your journey?</p>

            <div className="form-group">
              <label htmlFor="email">Email (*)</label>
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
              <label htmlFor="password">Password (*)</label>
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

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                value={username}
                type="text"
                className="form-control"
                placeholder="nguyen van a"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <button className="btn btn-dark" onClick={handleSubmitSignUp}>
              Create my free account
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

export default SignUp;
