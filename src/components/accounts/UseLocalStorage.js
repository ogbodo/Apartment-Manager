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


export function useLocalStorageUser(initialValue) {
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
