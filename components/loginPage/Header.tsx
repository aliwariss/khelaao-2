import { StatusBar } from "expo-status-bar";
import { ImageBackground, View ,StyleSheet} from "react-native";

const Header = () => {
  return (
    <>
      <StatusBar backgroundColor="#cc6500"></StatusBar>
      <ImageBackground
        style={styles.bgImage}
        resizeMode="cover"
        source={require("../../assets/images/khelaaoLogo.png")}
      >
        <View style={styles.bgOpaque}></View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 3 / 10,
    width: '100%',
    shadowColor: "black",
  },
  bgOpaque: {
    flex: 1,
    width: '100%',
    backgroundColor: "rgba(1,1,1,0.3)",
  }
})

export default Header