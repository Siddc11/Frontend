import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";

const Login = () => {
  //States to handle the data of the input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //function to handle the submit button data

  const handleSubmit = () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Email or Password missing!");
        setLoading(false);
        return;
      }
      setLoading(false);
      console.log("Registered data=> ", { email, password });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>LOGIN</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox
          placeholder={"Email"}
          keyboardType="email-address"
          autoComplete="Email"
          value={email}
          setValue={setEmail}
        />

        <InputBox
          placeholder={"Password"}
          secureTextEntry={true}
          autoComplete="Password"
          value={password}
          setValue={setPassword}
        />
      </View>

      <SubmitButton
        title="Login"
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Text style={styles.linkText}>
        Not Registered yet ? Click 👉 <Text style={styles.link}>REGISTER</Text>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFF8E8",
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e2225",
    marginBottom: 10,
  },
  linkText: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 15,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    fontWeight: "bold",
    textDecorationColor: "red",
    fontSize: 17,
  },
});
