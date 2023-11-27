import { View,Text,StyleSheet } from "react-native";

import { Dimensions } from "react-native";
const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

interface HeadingText {
    headingText:string
}

export default function ({headingText}:HeadingText) {
  return(
    <>
    <View style={styles.headingContainer}>
      <View style={styles.loginBoxHeading}></View>
      <Text style={styles.headerLineText}>{headingText}</Text>
      <View style={styles.loginBoxHeading}></View>
    </View>
  </>
  )
}
const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
      },
      loginBoxHeading: {
        height: 1.5,
        width: width / 3,
        backgroundColor: "grey",
      },
      headerLineText: {
        color: "grey",
        fontSize: 14,
        fontWeight: "900",
        margin: 6,
      },
})
