import { View, Text, StyleSheet } from "react-native"
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width; //full width

export default function () {
    return(
        
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            By signing in, you agree to Our Terms of Services and Privacy Policy
          </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    footerContainer: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#e78d46",
        flex: 1 / 10,
        width:width
      },
      footerText: {
        color: "white",
        fontSize: 14,
      }
})