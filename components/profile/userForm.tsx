import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import DateOfBirthPicker from "../signupForm/DateOfBirth";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];
const playingRole = [
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

const batStyle = [
  { label: "Right-hand Bat", value: "Right-hand Bat" },
  { label: "Left-hand Bat", value: "Left-order Bat" },
];

const BowlingRole = [
  { label: "Right-arm fast", value: "Right-arm fast" },
  { label: "Right-arm medium", value: "Right-arm medium" },
  { label: "Left-arm fast", value: "Left-arm fast" },
  { label: "Slow left-arm orthodox ", value: "Slow left-arm orthodox" },
  { label: "Slow left-arm chinaman", value: "Slow left-arm chinaman" },
  { label: "Right-arm Off Break ", value: "Right-arm Off Break" },
  { label: "Right-arm Leg Break", value: "Right-arm Leg Break" },
  { label: "None", value: "none" },
];

const Areas = [
  { label: "Gulberg", value: "Gulberg" },
  { label: "Liaquatabad", value: "Liaquatabad" },
  { label: "Nazimabad", value: "Nazimabad" },
  { label: "New Karachi", value: "New Karachi" },
  { label: "North Nazimabad", value: "North Nazimabad" },
  { label: "Ferozabad", value: "Ferozabad" },
  { label: "Gulshan-e-Iqbal", value: "Gulshan-e-Iqbal" },
  { label: "Gulzar-e-Hijri", value: "Gulzar-e-Hijri" },
  { label: "Islamabad", value: "Islamabad" },
  { label: "Jamshed Quarters", value: "Jamshed Quarters" },
  { label: "Aram Bagh", value: "Aram Bagh" },
  { label: "Civil Line", value: "Civil Line" },
  { label: "Garden", value: "Garden" },
  { label: "Lyari", value: "Lyari" },
  { label: "Saddar", value: "Saddar" },
  { label: "Mango Pir", value: "Mango Pir" },
  { label: "Mominabad", value: "Mominabad" },
  { label: "Orangi", value: "Orangi" },
  { label: "Gujrat", value: "Baldia" },
  { label: "Larkana", value: "Larkana" },
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

const RegistrationForm = ({ btnTitle }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [numberValid, setNumberValid] = useState(false);
  const [PlayingRole, setPlayingRole] = useState("");
  const [batstyle, setBattingStyle] = useState("");
  const [bowlingStyle, setBowlingStyle] = useState("");
  const [area, setArea] = useState("");

  const formatContactNumber = (text: any) => {
    // Remove non-numeric characters and keep only digits
    const cleaned = text.replace(/[^0-9]/g, "");
    // Check if the cleaned input matches the format (###) ###-####
    const match = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/.test(cleaned);
    console.log(match);
    setNumberValid(match);
    if (match) {
      // If it matches, format the input as (###) ###-####
      setNumberValid(match);
      return cleaned;
    }

    // If it doesn't match the format, return the input unchanged
    return;
  };
  const handleSubmit = () => {
    if (!numberValid) return;
    console.log({
      name,
      email,
      gender,
      dateOfBirth,
      contactNumber,
      numberValid,
      PlayingRole,
      batstyle,
      bowlingStyle,
      area,
    });

    setName("");
    setEmail("");
    setGender("");
    setDateOfBirth("");
    setContactNumber("");
    setPlayingRole("");
    setBattingStyle("");
    setBowlingStyle("");
    setArea("");
    Alert.alert("Data Added To Terminal");
  };

  return (
    <View style={styles.container}>
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
      <DateOfBirthPicker onDateChange={setDateOfBirth} />

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
      <Text style={styles.label}>Playing Role:</Text>
      <Dropdown
        style={styles.input}
        data={playingRole}
        labelField="label"
        valueField="value"
        placeholder={" Select playing Role"}
        value={PlayingRole}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(items) => {
          setPlayingRole(items.value);
          setIsFocus(false);
        }}
      />
      <Dropdown
        style={styles.input}
        data={batStyle}
        labelField="label"
        valueField="value"
        placeholder={" Select Batting Style"}
        value={batstyle}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(Itemss) => {
          setBattingStyle(Itemss.value);
          setIsFocus(false);
        }}
      />
      <Dropdown
        style={styles.input}
        data={BowlingRole}
        labelField="label"
        valueField="value"
        placeholder={" Select Bowling Style"}
        value={bowlingStyle}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(Itemsss) => {
          setBowlingStyle(Itemsss.value);
          setIsFocus(false);
        }}
      />
      <View style={{marginVertical:20}}>
        <Button title={btnTitle} onPress={handleSubmit}/>
      </View>
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
});

export default RegistrationForm;
