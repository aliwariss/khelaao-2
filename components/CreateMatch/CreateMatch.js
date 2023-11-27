import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker'
// import SideMenuBar from '../components/SideMenuBar';

const CreateMatch = () => {
  const [step, setStep] = useState(1);
  const [matchData, setMatchData] = useState({
    team1: '',
    team2: '',
    date: '',
    venue: '',
    timings: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return TeamSelection();
      case 2:
        return MatchDetails();

      default:
        return TeamSelection();
    }
  };

  const handleFieldChange = (fieldName, value) => {
    setMatchData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
    console.log(matchData);
  };

  const submitHandler = () => {
    // Handle form submission logic
  };

  const TeamSelection = () => {
    return (
      <View>
        {/* Team Selection Form */}
        <View style={{ margin: 16 }}>
        <Picker
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
            selectedValue={matchData.team1}
            onValueChange={(value) => handleFieldChange('team1', value)}
          >
            <Picker.Item label="Select team" value="" />
            <Picker.Item label="Johar team" value="Johar team" />
            <Picker.Item label="Gulshan team" value="Gulshan team" />
            <Picker.Item label="Pechs team" value="Pechs team" />
            <Picker.Item label="Bahadurabad team" value="Bahadurabad team" />
          </Picker>
          <Picker
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
            selectedValue={matchData.team2}
            onValueChange={(value) => handleFieldChange('team2', value)}
          >
            <Picker.Item label="Select team" value="" />
            <Picker.Item label="Johar team" value="Johar team" />
            <Picker.Item label="Gulshan team" value="Gulshan team" />
            <Picker.Item label="Pechs team" value="Pechs team" />
            <Picker.Item label="Bahadurabad team" value="Bahadurabad team" />
          </Picker>
        </View>
        <TouchableOpacity
          onPress={nextStep}
          style={{
            alignSelf: 'flex-end',
            backgroundColor: 'orange',
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <Text style={{ color: 'white' }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const MatchDetails = () => {
    return (
      <View>
        {/* Match Details Form */}
        <View style={{ margin: 16 }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
            placeholder="Date"
            value={matchData.date}
            onChangeText={(text) => handleFieldChange('date', text)}
          />
          <Picker
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
            selectedValue={matchData.venue}
            onValueChange={(value) => handleFieldChange('venue', value)}
          >
            <Picker.Item label="Select Venue" value="" />
            <Picker.Item label="Johar" value="Johar" />
            <Picker.Item label="Gulshan" value="Gulshan" />
            <Picker.Item label="Pechs" value="Pechs" />
            <Picker.Item label="Bahadurabad" value="Bahadurabad" />
          </Picker>
          <Picker
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
            selectedValue={matchData.timings}
            onValueChange={(value) => handleFieldChange('timings', value)}
          >
            <Picker.Item label="Select Timings" value="" />
            <Picker.Item label="Morning" value="Morning" />
            <Picker.Item label="Afternoon" value="Afternoon" />
            <Picker.Item label="Evening" value="Evening" />
          </Picker>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 16 }}>
          <TouchableOpacity
            onPress={prevStep}
            style={{
              backgroundColor: '#ccc',
              padding: 10,
              borderRadius: 5,
              width: '40%',
              alignItems: 'center',
            }}
          >
            <Text>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={submitHandler}
            style={{
              backgroundColor: 'orange',
              padding: 10,
              borderRadius: 5,
              width: '40%',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white' }}>Match Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      {/* <SideMenuBar /> */}
      <View style={{ flex: 1 }}>
        <View style={{ marginLeft: 16 }}>
          <View style={{ margin: 16 }}>
            <Text style={{ fontWeight: 'bold', color: 'orange', fontSize: 20 }}>
              Create a New Match!
            </Text>
            {renderForm()}
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreateMatch;