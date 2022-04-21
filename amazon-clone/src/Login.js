import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider.js";
import axios from "./api/axios.js";
const LOGIN_URL = "/auth";

function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser('');
    setPwd('');
    setSuccess(true);
  }
    //11:44 in react video to connect with backend as stretch goal
  //   try {
  //     const response = await axios.post(
  //       LOGIN_URL,
  //       JSON.stringify({ user, pwd }),
  //       {
  //         header: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       }
  //     );
  //     const accessToken = response?.data?.accessToken;
  //     const roles = response?.data?.roles;
  //     setAuth({ user, pwd, roles, accessToken });
  //     setUser("");
  //     setPwd("");
  //     setSuccess(true);
  //   } catch (err) {
  //     if (!err?.response) {
  //       setErrMsg("No Server Response");
  //     } else if (err.response?.status === 400) {
  //       setErrMsg("Missing Username or Password");
  //     } else if (err.response?.status === 401) {
  //       setErrMsg("Unauthorized");
  //     } else {
  //       setErrMsg("Login Failed");
  //     }
  //     errRef.current.focus();
  //   }
  // };

  return (
    <>
      <main class="form-signin">
        {success ? (
          <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
              <a href="/">Go to Home</a>
            </p>
          </section>
        ) : (
          <section>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>

            <h2 class=" fw-normal"> Sign In</h2>

            <form onSubmit={handleSubmit}>
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                placeholder="name@example.com"
                class="form-control"
                required
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                placeholder="Pa$$w0rd!"
                class="form-control"
                required
              />
  
              <button class="w-100 btn btn-warning">Log In</button>
            </form>

            {/* <p>
              Need an Account? <br />
              <span className="line">
                <a href="./registration">Create Account</a>
              </span>
            </p> */}
          </section>
        )}
      </main>
    </>
  );
}

export default Login;