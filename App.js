/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import MainApp from './src/mainApp';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <PaperProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <MainApp />
    </PaperProvider>
  );
};

export default App;
