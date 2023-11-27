import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Dimensions } from "react-native";
const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

export default function () {
  return (
    <>
      <View>
        <Text style={styles.loginBoxText}>
          Log In from here with an existing account
        </Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Link href="/loginForm" style={styles.btnFont}>
          Log In
        </Link>
      </TouchableOpacity>
      <View>
        <Text style={styles.loginBoxText}>Don't Have An Account?</Text>
        <Text style={styles.loginBoxText}>Click on Sign Up!</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Link href="/signupForm" style={styles.btnFont}>
          Sign Up
        </Link>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  loginBoxText: {
    color: "grey",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#e78d46",
    borderWidth: 0.5,
    borderColor: "black",
    margin: 15,
    padding: 10,
    width: width - 30,
    borderRadius: 100,
  },
  btnFont: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "700",
  },
});
