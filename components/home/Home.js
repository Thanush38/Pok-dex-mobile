import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Input from '../input/Input'
import Header from '../Header/Header'
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps'

const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.Header}>
            <Header />
        </View>
        <View style={styles.inputContainer}>
            <Input />
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
    inputContainer: {
        marginTop: '10%',
        height: '100%',
        width: '100%',
    },
    Header: {
        marginTop: '20%',
        width: '100%',
        height: '10%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default Home
