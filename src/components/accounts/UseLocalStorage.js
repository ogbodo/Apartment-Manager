import { useState, useEffect } from "react";
import * as DB from "../../db";
import swal from "sweetalert";

export function useSignupUser(initialValue) {
  const [userState, setUserState] = useState(initialValue);

  useEffect(() => {
    if (userState) {
      if (DB.SetUser("users", userState)) {
        swal("success", "Saved Successfully!", "success");
      } else {
        swal("Oops", `User Already Exist with ${userState.email}`, "error");
      }
    }
  }, [userState]);

  return [userState, setUserState];
}

export function useLoginUser(initialValue) {
  const [userState, setUserState] = useState(initialValue);

  useEffect(() => {
    if (userState) {
      const response = DB.Login("users", userState);
      if (response) {
        console.log(response);

        swal("success", "Log Successfully!", "success");
      } else {
        swal(
          "Oops!",
          `Incorrect login credentials. Please try again!`,
          "error"
        );
      }
    }
  }, [userState]);

  return [userState, setUserState];
}
