import React, { useState } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import utilFns from "../../utils/signupFns";
import ErrorBox from "../../utils/ErrorMsg";

const playingRoleArr = [
  { label: "Top-order Batter", value: "Top-order Batter" },
  { label: "Middle-order Batter", value: "Top-order Batter" },
  { label: "Wicket-keeper Batter", value: "Wicket-keeper Batter" },
  { label: "Wicket-keeper ", value: "Wicket-keeper " },
  { label: "Bowler", value: "Bowler" },
  { label: "All-Rounder", value: "All-Rounder" },
  { label: "low-order Batter", value: "low-order Batter" },
  { label: "Opening Batter", value: "Opening Batter" },
  { label: "None", value: "none" },
];

const battingStyleArr = [
  { label: "Right-hand Bat", value: "Right-hand Bat" },
  { label: "Left-hand Bat", value: "Left-order Bat" },
];

const bowlingStyleArr = [
  { label: "Right-arm fast", value: "Right-arm fast" },
  { label: "Right-arm medium", value: "Right-arm medium" },
  { label: "Left-arm fast", value: "Left-arm fast" },
  { label: "Slow left-arm orthodox ", value: "Slow left-arm orthodox" },
  { label: "Slow left-arm chinaman", value: "Slow left-arm chinaman" },
  { label: "Right-arm Off Break ", value: "Right-arm Off Break" },
  { label: "Right-arm Leg Break", value: "Right-arm Leg Break" },
  { label: "None", value: "none" },
];

const SectionThree = () => {
  const [playingRole, setPlayingRole] = useState("");
  const [battingStyle, setBattingStyle] = useState("");
  const [bowlingStyle, setBowlingStyle] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const btnPress = () => {
    {
      if (!playingRole || !battingStyle || !bowlingStyle) {
        setErrorMsg("Please fill the required fields!");
        setTimeout(() => setErrorMsg(""), 3000);
        return;
      }
    }
    utilFns.storeData(
      {
        playingRole,
        battingStyle,
        bowlingStyle,
      },
      "sec3"
    );
    utilFns.allFormData().then(elem => console.log(elem))
    Alert.alert("Registeration Successful!");
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Select Roles:</Text>
        <Dropdown
          style={styles.input}
          data={playingRoleArr}
          labelField="label"
          valueField="value"
          placeholder={" Select playing Role"}
          value={playingRole}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setPlayingRole(item.value);
            setIsFocus(false);
          }}
        />
        <Dropdown
          style={styles.input}
          data={battingStyleArr}
          labelField="label"
          valueField="value"
          placeholder={" Select Batting Style"}
          value={battingStyle}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setBattingStyle(item.value);
            setIsFocus(false);
          }}
        />
        <Dropdown
          style={styles.input}
          data={bowlingStyleArr}
          labelField="label"
          valueField="value"
          placeholder={" Select Bowling Style"}
          value={bowlingStyle}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setBowlingStyle(item.value);
            setIsFocus(false);
          }}
        />
        {errorMsg ? <ErrorBox message={errorMsg} /> : null}
        <TouchableOpacity onPress={btnPress} style={styles.btn}>
          <Text style={styles.btnText}>Create Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
  },
  label: {
    fontSize: 16,
    marginBottom: 3,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 16,
    padding: 8,
    borderRadius: 10,
  },
  dropdownContainer: {
    height: 40,
    marginBottom: 16,
  },
  dropdown: {
    backgroundColor: "#fafafa",
  },
  btn: {
    backgroundColor: "#e78d46",
    borderRadius: 5,
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    alignSelf: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});

export default SectionThree;
