import { StyleSheet, Text, View, Pressable,TextInput } from 'react-native';
import {useState, useEffect } from "react";
import Details from "../Details/Details.js";
import axios from 'axios';

function Input(){
    const [pokemon,setPokemon] = useState("");
    const [pokemonData,setPokemonData] = useState([]); // [{}
    const [show,setShow] = useState(false);
    
   
    const findPokemon= async () => {
        let lowerPokemon = pokemon.toLowerCase();
        const url = "https://pokeapi.co/api/v2/pokemon/"+lowerPokemon;
        console.log(url);
    
        axios({
            method: 'get',
            url: url,
            responseType: 'json'
        
        })
        .then(response => {
            console.log(response.data);
            setPokemonData(response.data);
            setShow(true);
            console.log(show)
        }).catch(error => {
            console.log(error);
        })
        

        
    }
    return(
        <View style={styles.container}>
            <View  style={styles.info}>
                <View style={styles.inputContainer}>
                  <TextInput type="text" placeholder="Search Pokemon" onChangeText={setPokemon} onSubmitEditing={findPokemon}/>
                </View>
                <View style={styles.buttonContainer}>
                <Pressable onPress={findPokemon} style={styles.button}>
                  <Text style={styles.buttonText}>Search</Text>
                </Pressable>
                </View>
                <View style={styles.details}>
                  {show? <Details pokemon={pokemonData} key={pokemonData}/> : null}
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5FCFF',
      height: '100%',
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 45,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 30,
      backgroundColor: '#FFF',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,  
      elevation: 5,
    },
    info:{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        height: '100%',
        width: '100%',
    },
    buttonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 45,
      marginTop: 10,
      marginBottom: 20,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 30,
      backgroundColor: '#FFCC00',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,  
      elevation: 5,
    },
    pokemonImage: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    button: {
      display: 'inline-block',
      width: '90%',
      backgroundColor: '#FFCC00',
      color:' #FFFFFF',
      fontSize: '16px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textDecoration: 'none',
      border: 'none',
      borderRadius: '30px',
      boxShadow:' 0 2px 5px rgba(0, 0, 0, 0.2)',
      transition: 'background-color 0.3s ease',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    
  });

export default Input;