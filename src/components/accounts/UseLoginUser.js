import React, { useState, useEffect, useContext } from "react";
import * as DB from "../../db";
import swal from "sweetalert";
import AgentDashboard from "../AgentDashboard";

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
      setUserState(response);
    }
  }, [userState]);

  return [userState, setUserState];
}
