import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);
  const enteredValueIsValid = validateValue(enteredValue);
  const enteredValueHasError = !enteredValueIsValid && enteredValueTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = (event) => {
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueTouched(false);
  };

  return {
    value: enteredValue,
    enteredValueIsValid,
    enteredValueHasError,
    valueChangeHandler,
    valueInputBlurHandler,
    reset,
  };
};

export default useInput;
