import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import utilFns from "../../utils/signupFns";
import { ScrollView } from "react-native-gesture-handler";
import ErrorBox from "../../utils/ErrorMsg";

const Areas = [
  { label: "Gulberg", value: "Gulberg" },
  { label: "Liaquatabad", value: "Liaquatabad" },
  { label: "Nazimabad", value: "Nazimabad" },
  { label: "New Karachi", value: "New Karachi" },
  { label: "North Nazimabad", value: "North Nazimabad" },
  { label: "Ferozabad", value: "Ferozabad" },
  { label: "Gulshan-e-Iqbal", value: "Gulshan-e-Iqbal" },
  { label: "Gulzar-e-Hijri", value: "Gulzar-e-Hijri" },
  { label: "Jamshed Quarters", value: "Jamshed Quarters" },
  { label: "Aram Bagh", value: "Aram Bagh" },
  { label: "Civil Line", value: "Civil Line" },
  { label: "Garden", value: "Garden" },
  { label: "Lyari", value: "Lyari" },
  { label: "Saddar", value: "Saddar" },
  { label: "Mango Pir", value: "Mango Pir" },
  { label: "Mominabad", value: "Mominabad" },
  { label: "Orangi", value: "Orangi" },
  { label: "Harbour", value: "Harbour" },
  { label: "Mauripur", value: "Mauripur" },
  { label: "Airport", value: "Airport" },
  { label: "Bin Qasim", value: "Bin Qasim" },
  { label: "Gadap", value: "Gadap" },
  { label: "Ibrahim Hyderi", value: "Ibrahim Hyderi" },
  { label: "Murad Memon", value: "Murad Memon" },
  { label: "Korangi", value: "Korangi" },
  { label: "Bin Qasim", value: "Landhi" },
  { label: "Model Colony", value: "Model Colony" },
  { label: "Shah Faisal", value: "Shah Faisal" },
];

const SectionOne = ({ changePageFn }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const btnPress = () => {
    {
      const cleanedName = name.replace(/[^\w]/g, "");
      const cleanedEmail = email.replace(/[^\w]/g, "");

      if (!cleanedName || !cleanedEmail || !area) {
        setErrorMsg("Please fill the required fields!");
        setTimeout(() => setErrorMsg(""), 3000);
        return;
      }
    }

    changePageFn();
    utilFns.storeData(
      {
        name,
        email,
        area,
      },
      "sec1"
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          autoFocus={true}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Area:</Text>
        <Dropdown
          style={styles.input}
          data={Areas}
          labelField="label"
          valueField="value"
          placeholder={"Select Area"}
          search={true}
          value={area}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setArea(item.value);
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

export default SectionOne;
