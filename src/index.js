import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Navigator from './navigations';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigator/>
    </PaperProvider>
  );
}