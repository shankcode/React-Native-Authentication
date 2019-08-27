import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "native-base";
import * as firebase from "firebase";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }

  static navigationOptions = {
    title: "Home",
    hrader: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticated => {
      if (authenticated) {
        this.setState({
          name: authenticated.displayName,
          email: authenticated.email
        });
      } else {
        this.props.navigation.replace("Signin");
      }
    });
  }

  singOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("User Sign Out");
      })
      .catch(err => alert(err));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} />
          <Text></Text>
          <Text>Tatvdarshi Universe Technology</Text>
        </View>
        <View style={styles.userDetails}>
          <Text>Hey {this.state.name}</Text>
          <Text>You are signed in as: {this.state.email}</Text>
        </View>
        <Button
          style={styles.button}
          full
          rounded
          success
          onPress={() => {
            this.singOutUser();
          }}
        >
          <Text style={styles.buttonText}>Sign Out</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 20
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  userDetails: {},

  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  }
});
