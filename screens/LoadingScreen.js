import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as firebase from "firebase";

export default class LoadingScreen extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticated => {
      if (authenticated) {
        this.props.navigation.replace("Home");
      } else {
        this.props.navigation.replace("Signin");
      }
    });
  }

  static navigationOptions = {
    title: "Loading",
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="##E74292" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
