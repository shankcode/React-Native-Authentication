import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { Form, Input, Item, Label, Button } from "native-base";
import * as firebase from "firebase";

export default class SigninScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  static navigationOptions = {
    title: "Signin",
    header: null
  };

  signInUser = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User Signed In");
        this.props.navigation.replace("Home");
      })
      .catch(err => alert(err));
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="position"
        enabled
      >
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} />
          <Text></Text>
          <Text>Tatvdarshi Universe Technology</Text>
        </View>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              textContentType="emailAddress"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={email => {
                this.setState({ email });
              }}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={password => {
                this.setState({ password });
              }}
            />
          </Item>
          <Button
            full
            rounded
            style={styles.button}
            onPress={() => {
              this.signInUser(this.state.email, this.state.password);
            }}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </Button>
        </Form>

        <View style={styles.footer}>
          <Text>Or</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Signup");
            }}
            style={styles.button}
          >
            <Text>Create an account?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  form: {
    padding: 20,
    width: "100%",
    marginBottom: 30
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  }
});
