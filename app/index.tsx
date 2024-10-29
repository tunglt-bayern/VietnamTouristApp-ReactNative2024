import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import ZodiacHeader from './ZodiacHeader';
import ZodiacFooter from './ZodiacFooter';
import WelcomeScreen from './WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <ZodiacHeader />
        <WelcomeScreen />
      </View>
      <View style={styles.footerContainer}>
        <ZodiacFooter />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});
