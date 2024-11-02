
  import { View, StyleSheet } from 'react-native';

  import ZodiacHeader from './ZodiacHeader';
  import ZodiacFooter from './ZodiacFooter';
  import WelcomeScreen from './WelcomeScreen';
  import MainMenu from './MainMenu';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import React, { useState } from 'react';

  const Stack = createNativeStackNavigator();

  export default function App() {
    return (
      <NavigationContainer independent={true}>
        <View style={styles.container}>
          <ZodiacHeader />
          <View style={styles.content}>
            <Stack.Navigator initialRouteName="Welcome">
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
              <Stack.Screen name="Menu" component={MainMenu} />
            </Stack.Navigator>
          </View>
          <ZodiacFooter />
        </View>
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333333',
    },
    content: {
      flex: 1,
    },
    footerContainer: {
      backgroundColor: '#333333',
      paddingVertical: 10,
    },
  });
