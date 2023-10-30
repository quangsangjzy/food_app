import React from 'react';
import Main from './src/Main/Main'
import { StatusBar, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import LoginNavigation from './src/Login/LoginNavigation';

StatusBar.setHidden(true)

const App = () => {
    return(
      <Main/>
    )
}


export default App;