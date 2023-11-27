import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CreateTeam = ({ navigation }) => {
  // Add your logic for creating a team here
  const [teamData, setTeamData] = useState({
    player: ''
  });
  return (
    <View style={styles.container}>
      <Text>Create Team Screen</Text>
      {/* Add your UI components for creating a team */}
      <Picker
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
            selectedValue={teamData.player}
            onValueChange={(value) => handleFieldChange('player', value)}
          >
            <Picker.Item label="player" value="player" />

            
          </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
});

export default CreateTeam;
