import DigitsInput from "react-native-digits-input";
import Btn from "./Btn";
import services from "../../services/signup";
import ErrorBox from "../../utils/ErrorMsg";

import { router } from "expo-router";
import { useState, useEffect } from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";

export default function () {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpStatus, setOtpStatus] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [Otp, setOtp] = useState("");

  const submitNumberFn = () => {
    const cleaned = phoneNumber.replace(/[^0-9]/g, "");
    if (!cleaned || cleaned.length !== 11) {
      setErrorMsg("Invalid Phone Number");
      setTimeout(() => {
        setErrorMsg("");
      }, 1500);
      return;
    }
    setOtpStatus(true);
    setPhoneNumber("");
    // services
    //   .login(phoneNumber)
    //   .then((res) => {
    //     console.log("submitFn", res);
    //     setOtpStatus(true);
    //     setPhoneNumber("");
    //   })
    //   .catch((error) => {
    //     if (error.message === "Request failed with status code 404") {
    //       setErrorMsg("User not found!");
    //       setTimeout(() => {
    //         setErrorMsg("");
    //       }, 1500);
    //     } else {
    //       setErrorMsg("Server Error");
    //       setTimeout(() => {
    //         setErrorMsg("");
    //       }, 1500);
    //     }
    //   });
  };

  const submitOTPFn = () => {
    if (Otp.length !== 4) {
      setErrorMsg("Invalid OTP Number");
      setTimeout(() => {
        setErrorMsg("");
      }, 1500);
      return;
    }

    console.log("OTP", Otp);
    const verification = Otp;
    verification && router.replace("/Feed/Profile");
    // router.replace("/Feed/Profile");
  };

  const LoginScreen = () => {
    return (
      <>
        <Text style={{ fontSize: 16, alignSelf: "center" }}>
          Login In With Phone Number
        </Text>
        <View style={styles.FieldBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter Phone Number"
            autoFocus={true}
            maxLength={14}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
          />
          {errorMsg ? (
            <View style={{ width: 300, alignSelf: "center" }}>
              <ErrorBox message={errorMsg} />
            </View>
          ) : null}
        </View>
        <Btn btnFn={submitNumberFn} btnText={"Send OTP"} />
      </>
    );
  };

  const OTPScreen = () => {
    return (
      <>
        <Text style={{ fontSize: 16, alignSelf: "center" }}>
          Enter OTP Code
        </Text>
        <View style={styles.FieldBox}>
          <DigitsInput
            numberOfDigits={4}
            onCodeChange={(text) => setOtp(text)}
          />
          {errorMsg ? (
            <View style={{ width: 200, alignSelf: "center" }}>
              <ErrorBox message={errorMsg} />
            </View>
          ) : null}
        </View>
        <Btn btnFn={submitOTPFn} btnText={"Enter OTP"} />
      </>
    );
  };

  return <>{otpStatus ? OTPScreen() : LoginScreen()}</>;
}

const styles = StyleSheet.create({
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    width: 300,
    textAlign: "center",
    borderRadius: 4,
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 16,
  },
  FieldBox: {
    marginVertical: 16,
  },
});
