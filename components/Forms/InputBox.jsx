import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const InputBox = ({
  placeholder,
  keyboardType,
  autoComplete,
  secureTextEntry = false,
  value,
  setValue,
}) => {
  return (
    <View>
      <TextInput
        style={styles.inputBox}
        placeholder={placeholder}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  inputBox: {
    height: 50,
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    fontSize: 18,
    padding: 15,
    borderWidth: 0.8,
  },
});
