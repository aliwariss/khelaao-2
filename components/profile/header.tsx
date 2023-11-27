import { Text, View, StyleSheet } from "react-native";

export default ({ HeaderText, HeaderFn }: any) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.text}>{HeaderText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "orange",
    width: "100%",
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
