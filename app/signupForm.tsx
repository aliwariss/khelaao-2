import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  ImageBackground,
} from "react-native";
import Footer from "../components/loginPage/Footer";
import Section1 from "../components/signupForm/section1";
import Section2 from "../components/signupForm/section2";
import Section3 from "../components/signupForm/section3";
import HeadingLine from "../components/loginPage/Heading";
import { useState } from "react";

export default function SignUpForm() {
  const [sec1, setSec1] = useState(true);
  const [sec2, setSec2] = useState(false);
  const [sec3, setSec3] = useState(false);

  function flipToPage2() {
    setSec1(!sec1)
    setSec2(!sec2)
  }
  const flipToPage3 = () => {
    setSec2(!sec2)
    setSec3(!sec3)
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"black"} />
      <View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.innerContain}>
              <ImageBackground
                style={styles.bgImage}
                resizeMode="contain"
                source={require("../assets/images/khelaaoPNG.png")}
              />
              <HeadingLine headingText={"REGISTER"} />
              {sec1 ? <Section1 changePageFn={flipToPage2} /> : null}
              {sec2 ? <Section2 changePageFn={flipToPage3} /> : null}
              {sec3 ? <Section3 /> : null}
              
            </View>
          </View>
        </ScrollView>
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
  body: {
    alignItems: "center",
    flex: 1,
    paddingTop: 20,
  },
  bgImage: {
    height: 100,
    width: 150,
    shadowColor: "black",
  },
  innerContain: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    padding: 15,
    borderRadius: 20,
  }
});
