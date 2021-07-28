import React, { Fragment } from "react";
import useInput from "../hooks/use-input";
const Login = () => {
  return (
    <Fragment>
      <div class="container h-100">
        <div class="d-flex justify-content-center h-100">
          <div class="user_card">
            <div class="d-flex justify-content-center">
              <div class="brand_logo_container">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  class="brand_logo"
                  alt="Logo"
                />
              </div>
            </div>
            <div class="d-flex justify-content-center form_container">
              <form>
                <div class="d-flex justify-content-center mt-3 login_container">
                  <a
                    href="http://localhost:4000/handleLogin"
                    name="button"
                    class="btn login_btn"
                  >
                    Login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
