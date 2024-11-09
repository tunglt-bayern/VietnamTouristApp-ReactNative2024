
  import { View, StyleSheet } from 'react-native';

  import ZodiacHeader from './ZodiacHeader';
  import ZodiacFooter from './ZodiacFooter';
  import WelcomeScreen from './WelcomeScreen';
  import MainMenu from './MainMenu';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import React, { useState } from 'react';
  import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

  const Tab = createBottomTabNavigator();

  export default function App() {
    return (
      <>
        <NavigationContainer independent={true}>
          <View style={styles.container}>
            <ZodiacHeader />
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({size}) => {
                  let iconName;
                  if (route.name === 'Welcome') {
                    iconName = 'md-home';
                  } else if (route.name === 'Menu') {
                    iconName = 'md-menu';
                  }
                  return <Ionicons name={iconName} size={size} />;
                },
              })}
              initialRouteName="Menu">
              <Tab.Screen name="Welcome" component={WelcomeScreen} />
              <Tab.Screen name="Menu" component={MainMenu} />
            </Tab.Navigator>
          </View>
          <View style={styles.footerContainer}>
            <ZodiacFooter />
          </View>
        </NavigationContainer>
      </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333333',
    },
    footerContainer: { backgroundColor: '#333333' },
  })