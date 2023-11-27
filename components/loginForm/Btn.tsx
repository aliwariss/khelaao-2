import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ({ btnFn, btnText }: any) {
  return (
    <TouchableOpacity onPress={btnFn} style={styles.loginBtn}>
      <Text style={{ fontSize: 16, color: "white" }}>{btnText}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  loginBtn: {
    marginVertical: 10,
    width: "auto",
    backgroundColor: "#e78d46",
    alignItems: "center",
    padding: 10
  },
});
