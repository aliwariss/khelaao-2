import Header from "../components/loginPage/Header";
import Heading from "../components/loginPage/Heading";
import BtnContainer from "../components/loginPage/BtnContainer";
import Footer from "../components/loginPage/Footer";
import services from "../services/signup";
import { useEffect } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
        <View style={styles.btnContainer}>
          <Heading headingText={"CONTINUE WITH"} />
          <BtnContainer />
        </View>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(1,1,1,0.1)",
    flexDirection: "row",
  },
  btnContainer: {
    alignItems: "center",
    flex: 8 / 10,
    paddingTop: 20,
  },
});
