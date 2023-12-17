// Import necessary components from React and React Navigation
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// Create a screen component


// Create a stack navigator
const Stack = createStackNavigator();

// Main component that wraps the navigation
const Header = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Pokedex</Text>
  </View>
);

// create stylesheet for header
const styles = StyleSheet.create({
  container: {
    paddingTop: '20%',
    height: "120%",
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  
});

export default Header;
