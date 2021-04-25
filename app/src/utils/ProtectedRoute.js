import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token") === null) {
          return <Redirect to="/" />;
        }
        return <Component {...rest} />;
      }}
    />
  );
};

export default ProtectedRoute;
