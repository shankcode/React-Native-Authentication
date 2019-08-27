import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import { createAppContainer, createStackNavigator } from "react-navigation";

// Import All Screens
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import LoadingScreen from "./screens/LoadingScreen";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// React Navigation Code
let MainActivity = createStackNavigator(
  {
    Loading: { screen: LoadingScreen },
    Signup: { screen: SignupScreen },
    Signin: { screen: SigninScreen },
    Home: { screen: HomeScreen }
  },
  {
    initialRouteName: "Loading"
  }
  // {
  //   defaultNavigationOptions: {
  //     headerStyle: {
  //       backgroundColor: "#ba2f16"
  //     },
  //     headerTintColor: "#fff",
  //     headerTitleStyle: {
  //       color: "#fff"
  //     }
  //   }
  // }
);

let App = createAppContainer(MainActivity);

export default App;
