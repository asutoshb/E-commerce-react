import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

function PrivateRoute({
  children,
  path,
  exact = false,
  redirectPath = "/signin",
  push = false
}) {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Redirect to={redirectPath} push={push} />
  );
}

export { PrivateRoute };
