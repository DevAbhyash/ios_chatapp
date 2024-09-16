import { Text, View } from "react-native";
import React from "react";

const authChecker = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  //   if (!emailRegex) {
  //     return "Please Check Your Email ";
  //   }
  if (!passwordRegex) {
    return "Please check your Password";
  }
  return "true";
};

export default authChecker;
