import * as React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const MainMenuToAdd = [
  'Travel Tickets \n Airport Transfer \n Hotels \n Tours \n Things to do \n Hanoi \n Saigon \n Da Nang \n Nha Trang \n Contact',
];

const MainMenu = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={false}
        indicatorStyle="white"
        style={styles.scrollView}
      >
        <Text style={styles.title}>Menu</Text>
        <Text style={styles.menuText}>{MainMenuToAdd[0]}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#0066ff',
    fontSize: 40,
    flexWrap: 'wrap',
  },
  menuText: {
    color: 'black',
    fontSize: 25,
  },
});

export default MainMenu;
