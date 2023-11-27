import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import DateOfBirthPicker from "./DateOfBirth";
import { Dropdown } from "react-native-element-dropdown";
import utilFns from "../../utils/signupFns";
import ErrorBox from "../../utils/ErrorMsg";

const data = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

const SectionTwo = ({ changePageFn }: any) => {
  const [contactNumber, setContactNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const btnPress = () => {
    {
      if (!contactNumber || !gender || !dateOfBirth) {
        setErrorMsg("Please fill the required fields!");
        setTimeout(() => setErrorMsg(""), 3000);
        return;
      }
    }

    const cleaned = contactNumber.replace(/[^0-9]/g, "");
    changePageFn();
    utilFns.storeData(
      {
        dateOfBirth,
        cleaned,
        gender,
      },
      "sec2"
    );
  };

  const formatContactNumber = (text: any) => {
    if (text.length === 11) {
      setErrorMsg("");
      if (text) {
        // If it matches, format the input as (####) #######
        const inputString = text;
        const outputString = inputString.replace(/(\d{4})(\d{7})/g, "$1 $2");
        return outputString;
      } else {
        return "";
      }
    }

    setErrorMsg("Invalid Number Format");
    return;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Contact Number:</Text>
        <TextInput
          style={styles.input}
          value={contactNumber}
          onChangeText={(text) => setContactNumber(formatContactNumber(text))}
          placeholder="(+92)/0 321 1234567"
          keyboardType="phone-pad"
          autoFocus={true}
        />
        <DateOfBirthPicker onDateChange={setDateOfBirth} />

        <Text style={styles.label}>Gender:</Text>
        <Dropdown
          style={styles.input}
          data={data}
          labelField="label"
          valueField="value"
          placeholder={"Select Gender"}
          value={gender}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setGender(item.value);
            setIsFocus(false);
          }}
        />
        {errorMsg ? <ErrorBox message={errorMsg} /> : null}
        <TouchableOpacity onPress={btnPress} style={styles.btn}>
          <Text style={styles.btnText}>{'>'}</Text>
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
    margin: 3,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 20,
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
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    alignSelf: "center",
  },
  btnText: {
    color: "white",
    fontSize: 30,
  },
});

export default SectionTwo;
