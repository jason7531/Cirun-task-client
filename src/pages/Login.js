import React, { Fragment } from "react";
import useInput from "../hooks/use-input";
const Login = () => {
  const {
    value: enteredEmail,
    enteredValueIsValid: enteredEmailIsValid,
    enteredValueHasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const {
    value: enteredPassword,
    enteredValueIsValid: enteredPasswordIsValid,
    enteredValueHasError: passwordInputHasError,
    valueChangeHandler: passwordInputChangeHandler,
    valueInputBlurHandler: passwordInputBlurHandler,
    reset: passwordReset,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  let formIsValid = false;

  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(enteredEmail);
    emailReset();
    passwordReset();
  };
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
                <div class="input-group mb-3">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name=""
                    class="form-control input_user"
                    value=""
                    placeholder="username"
                  />
                </div>
                <div class="input-group mb-2">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name=""
                    class="form-control input_pass"
                    value=""
                    placeholder="password"
                  />
                </div>
                <div class="form-group">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customControlInline"
                    />
                    <label
                      class="custom-control-label"
                      for="customControlInline"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-center mt-3 login_container">
                  <button type="button" name="button" class="btn login_btn">
                    Login
                  </button>
                </div>
              </form>
            </div>

            <div class="mt-4">
              <div class="d-flex justify-content-center links">
                Don't have an account?{" "}
                <a href="#" class="ml-2">
                  Sign Up
                </a>
              </div>
              <div class="d-flex justify-content-center links">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
