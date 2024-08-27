import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SubmitButton = ({ title, loading, handleSubmit }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.btnText}>{loading ? "Please Wait..." : title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#BEDC74",
    marginHorizontal: 40,
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    elevation: 10,
    borderWidth: 1,
  },

  btnText: {
    fontSize: 23,
    fontWeight: "bold",
  },
});
