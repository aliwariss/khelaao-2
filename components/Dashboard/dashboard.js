import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import SideMenuBar from '../components/SideMenuBar';
import { RiTeamLine } from 'react-icons/ri';
// import MoreInfo from '../components/MoreInfo';
// import axios from '../utilis/axios';

const HomeScreen = ({ navigation }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(true);

  return (
    <View style={styles.container}>
      {/* <SideMenuBar /> */}

      <View style={styles.contentContainer}>
        {/* {showMoreInfo ? <MoreInfo /> : null} */}

        <View style={styles.flexContainer}>
          {/* Create Team */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              // Add logic for Create Team button press
              navigation.navigate('CreateTeam');
              console.log('Create team button pressed!');
            }}
          >
            <View style={styles.iconContainer}>
              <RiTeamLine style={styles.icon} />
            </View>
            <Text style={styles.cardTitle}>Create Team</Text>
            <Text style={styles.cardDescription}>
              Strength in Unity, Success as Team
            </Text>
          </TouchableOpacity>

          {/* Matches */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              // Add logic for Matches button press
              navigation.navigate('Match');
              console.log('Matches button pressed!');
            }}
          >
            <View style={styles.iconContainer}>
              {/* Replace with your image source */}
              {/* <Image source={require('/match.png')} style={styles.image} /> */}
            </View>
            <Text style={styles.cardTitle}>Matches</Text>
            <Text style={styles.cardDescription}>
              Cricket matches: where heroes emerge.
            </Text>
          </TouchableOpacity>

          {/* More Info */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              setShowMoreInfo(false);
            }}
          >
            <View style={styles.iconContainer}>
              {/* Replace with your SVG or other icon */}
              <Text>Icon</Text>
            </View>
            <Text style={styles.cardTitle}>More Info</Text>
            <Text style={styles.cardDescription}>
              Fingerstache flexitarian street art 8-bit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginLeft: 16,
    // Add other styling properties as needed
  },
  flexContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    width: '45%', // Adjust as needed
    margin: 8,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFA500',
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDAB9',
    borderRadius: 20,
    marginBottom: 8,
  },
  icon: {
    fontSize: 24,
    color: '#FFA500',
  },
  image: {
    width: 24,
    height: 24,
    tintColor: '#FFA500',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;