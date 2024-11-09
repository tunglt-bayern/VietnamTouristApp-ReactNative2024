
import { View, StyleSheet } from 'react-native';

import ZodiacHeader from './ZodiacHeader';
import ZodiacFooter from './ZodiacFooter';
import WelcomeScreen from './WelcomeScreen';
import MainMenu from './MainMenu';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer independent={true}>
        <View style={styles.container}>
          <ZodiacHeader />
          <Drawer.Navigator useLegacyImplementation initialRouteName="Menu">
            <Drawer.Screen name="Welcome" component={WelcomeScreen} />
            <Drawer.Screen name="Menu" component={MainMenu} />
          </Drawer.Navigator>
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
});