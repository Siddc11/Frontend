import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";

const Register = () => {
  //States to handle the data of the input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //function to handle the submit button data

  const handleSubmit = () => {
    try {
      setLoading(true);
      if (!name || !email || !password) {
        Alert.alert("Please Enter All the Fields");
        setLoading(false);
        return;
      }
      setLoading(false);
      console.log("Registered data=> ", { name, email, password });
    } catch (error) {
      setLoading(false);
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
});
