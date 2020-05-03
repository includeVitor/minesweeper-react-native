import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  
  render(){
    return (
    
      <View style={styles.container}>
        
        <Text style={styles.welcome}>Iniciando o Mines!!!</Text>
        <Text style={styles.instructions}>Tamanho da Grade:
          {params.getRowsAmount()} x {params.getColumnsAmount()}
        </Text>

        <Field />
      </View>
    
    )
  }
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize:20,
    textAlign: 'center',
    margin: 10,
  }
});

