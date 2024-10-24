import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import ZodiacHeader from './ZodiacHeader';
import ZodiacFooter from './ZodiacFooter';
import MainMenu from './MainMenu';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <ZodiacHeader />
        <MainMenu />
      </View>
      <View style={styles.footerContainer}>
        <ZodiacFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  footerContainer: {
    backgroundColor: '#171717',
  },
});
