import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateOfBirthPicker = ({ onDateChange }: any) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    hideDatePicker();
    if (date) {
      const formattedDate = `${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()}`;
      setSelectedDate(formattedDate);
      onDateChange(formattedDate);
    }
  };

  return (
    <View style={{marginBottom:20}}>
      <Text style={styles.label}>Date of Birth:</Text>
      <Button title={selectedDate} onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label:{
    fontSize:16,
    marginVertical:10
  }
})

export default DateOfBirthPicker;
