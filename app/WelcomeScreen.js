import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  useColorScheme,
  Pressable,
} from 'react-native';
import React from 'react';

export default function WelcomeScreen({ navigation }) {
  const colorScheme = useColorScheme();

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#fff' }
          : { backgroundColor: '#333333' },
      ]}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require('../img/logo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Vietnam Local Logo'}
        />
        <Text
          style={[
            styles.headerText,
            colorScheme === 'light'
              ? { color: '#333333' }
              : { color: '#EDEFEE' },
          ]}>
          Vietnam Local
        </Text>
      </View>
      <Text
        style={[
          styles.regularText,
          colorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' },
        ]}>
        Vietnam Local was born with the mission to help international friends travel more easily and enjoy more fun while visiting Vietnam!
      </Text>
      <Text style={styles.regularText}>Click to view menu</Text>
      <Pressable
        onPress={() => navigation.navigate('Menu')}
        style={styles.button}>
        <Text style={styles.buttonText}>View Menu</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },  
});
