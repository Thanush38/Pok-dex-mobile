import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import './App.css';
import Home from './components/home/Home.js';
import {NavigationContainer} from '@react-navigation/native';


function App() {
  return (
    
      <View className="container">
          <Home />
      </View> 
  );
}




export default App;
