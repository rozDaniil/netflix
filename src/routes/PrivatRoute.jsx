import React from "react";
import { Navigate } from "react-router-dom";

export const PrivatRoute = ({ access, replaceUrl, element }) => {
  if (access) {
    return element;
  }
  return <Navigate replace to={replaceUrl} />;
};
