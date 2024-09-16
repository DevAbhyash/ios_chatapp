import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { useState } from "react";
import authChecker from "../utils/authChecker";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationText, setValidationText] = useState("");
  const [loginButton, setLoginButton] = useState("Login");
  const [toggleButton, setToggleButton] = useState(false);

  function handleEmail(e) {
    //function to update email when there is change in email input
    setEmail(e);
  }
  function handlePassword(e) {
    //function to update password when there is change in password input
    setPassword(e);
  }

  function handleSignUpPress() {
    //function to update login/signup button according to user input
    setToggleButton(!toggleButton);
    if (toggleButton === true) {
      setLoginButton("Login");
    } else {
      setLoginButton("Sign Up");
    }
  }

  function handleSignAgeButtonText() {
    //function for checking login authentication when we doing login/signup
    const validate = authChecker(email, password);
    if (validate !== "true") {
      setValidationText(validate);
    }
    if (validate === "true") {
      console.log("Hello");
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user, "true");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Login to Chat</Text>
      <TextInput
        onChangeText={handleEmail}
        style={styles.textInput}
        placeholder="Enter Your Username"
      />
      <TextInput
        onChangeText={handlePassword}
        style={styles.textInput}
        placeholder="Enter Your Password"
      />
      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={handleSignAgeButtonText}
      >
        <Text style={styles.loginText}>{loginButton}</Text>
      </TouchableOpacity>
      <Text style={styles.newUserText}>{validationText}</Text>
      <Text style={styles.newUserText}>
        New to Chatiing?
        <Text onPress={handleSignUpPress} style={styles.signUp}>
          Signup Now
        </Text>
      </Text>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  titleText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: "white",
    height: 50,
    width: 270,
    marginTop: 14,
  },
  container: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#1E6738",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    height: 50,
    width: 80,
    alignItems: "center",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  newUserText: {
    color: "white",
    marginTop: 50,
    fontSize: 18,
    fontWeight: "bold",
  },

  signUp: {
    color: "red",
  },
});
