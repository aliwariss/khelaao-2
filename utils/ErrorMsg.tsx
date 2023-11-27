import { Text, View, StyleSheet } from "react-native";
export default ({ message }:any) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth:1,
    borderColor:'red',
    borderRadius:10,
    paddingVertical:5,
    alignItems:'center',
    marginVertical:10
  },
  text: {
    color: "red",
    fontSize:16
  }
});
