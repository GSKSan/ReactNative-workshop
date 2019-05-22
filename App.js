import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TestComponent} from './TestComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TestComponent name={'GSkS'} workshopNo={1}/>
        <TestComponent name={'Adit'} workshopNo={2}/>
        <TestComponent name={'Mali'} workshopNo={3}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({


  container:{
    flex: 1,
      width: '100%',
      backgroundColor:'yellow',
      justifyContent:'flex-end',
      alignItems:'flex-end'
  }





})

