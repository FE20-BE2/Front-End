import React from "react";
import "/src/css/SignUp.css";

function SignUp() {
  return (
    <section className="container">
      <div className="container ">
        <div className="row">
          <div className="col-sm-5 col-md-6">
            <img src="img/login.png" className="img-fluid" alt="login" />
          </div>
          <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
            <div className="py-4">
              <h3 className="py-5 text-center">Selamat Datang!</h3>
              <form action="kelasOffline.html" onSubmit="submitLogin()">
                <div id="form-box">
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Masukkan Email"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Masukkan Password"
                    />
                  </div>
                  <div className="d-grid gap-2 py-3">
                    <button
                      onclick="submitLogin()"
                      className="btn btn-primary btn-dark"
                      id="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-center">
                Belum Punya Akun?
                <a className="nav-link" href="signup.html">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
