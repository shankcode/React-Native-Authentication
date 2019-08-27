import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert
} from "react-native";
import { Form, Label, Input, Item, Button } from "native-base";
import * as firebase from "firebase";

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  static navigationOptions = {
    title: "SignUp",
    hrader: null
  };

  signUpUser = (name, email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(authenticate => {
        // console.log(authenticate);
        return authenticate.user
          .updateProfile({
            displayName: name
          })
          .then(() => {
            this.props.navigation.replace("Home");
          })
          .catch(function(error) {
            // An error happened.
            Alert.alert(error.message);
          });
      })
      .catch(error => {
        Alert.alert(error.message);
      });
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
            <Label>Name</Label>
            <Input
              textContentType="emailAddress"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="name-phone-pad"
              onChangeText={name => {
                this.setState({ name });
              }}
            />
          </Item>
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
              this.signUpUser(
                this.state.name,
                this.state.email,
                this.state.password
              );
            }}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </Button>
        </Form>

        <View style={styles.footer}>
          <Text>Or</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Signin");
            }}
            style={styles.button}
          >
            <Text>Already have an account?</Text>
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
    width: "100%"
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
