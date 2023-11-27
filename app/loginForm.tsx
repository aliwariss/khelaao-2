import { View, SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/loginPage/Header";
import Footer from "../components/loginPage/Footer";
import Form from "../components/loginForm/LoginForm";
import HeadingLine from "../components/loginPage/Heading";

export default function LoginForm() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{width:'100%'}}>
          <Header />
          <View style={styles.body}>
            <HeadingLine headingText={"LOGIN"} />
            <Form />
          </View>
        </View>
      </SafeAreaView>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(1,1,1,0.1)",
    flexDirection: "row",
    justifyContent: "center",
  },
  body: {
    alignItems: "center",
    alignSelf:'center',
    flex: 6 / 10,
    paddingHorizontal: 20,
    paddingTop: 20,
  }
});
