import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";
import axios from "axios";

const Login = ({ navigation }) => {
  //States to handle the data of the input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //function to handle the submit button data

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Email or Password missing!");
        setLoading(false);
        return;
      }
      setLoading(false);
      const { data } = await axios.post(
        "http://192.168.0.102:5000/api/v1/auth/login",
        { email, password }
      );
      alert(data && data.message);
      console.log("Login data=> ", { email, password });
    } catch (error) {
      alert(error.response.data.message);
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
        Not Registered yet ? Click 👉{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Register")}
        >
          REGISTER
        </Text>
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
