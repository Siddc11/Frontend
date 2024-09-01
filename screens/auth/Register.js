import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";
import axios from "axios";

const Register = ({ navigation }) => {
  //States to handle the data of the input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //function to handle the submit button data

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!name || !email || !password) {
        Alert.alert("Please Enter All the Fields");
        setLoading(false);
        return;
      }

      const response = await axios.post(
        "http://192.168.0.102:5000/api/v1/auth/register",
        { name, email, password }
      );

      setLoading(false);
      Alert.alert(response.data && response.data.message); // Using Alert instead of alert
      console.log("Registered data=> ", { name, email, password });
    } catch (error) {
      setLoading(false);
      // Improved error handling
      if (error.response) {
        Alert.alert(error.response.data.message || "An error occurred");
      } else {
        Alert.alert("Network error or server not reachable");
      }
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox
          placeholder={"Name"}
          autoComplete="name"
          value={name}
          setValue={setName}
        />

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
      {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}
      <SubmitButton
        title="Submit"
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Text style={styles.linkText}>
        Already Registered ? Click👉{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
          LOGIN
        </Text>
      </Text>
    </View>
  );
};

export default Register;

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
