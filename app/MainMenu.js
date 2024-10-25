import * as React from 'react';
import { Text, View, StyleSheet, SectionList } from 'react-native';

const menuItemsToDisplay = [
  {
  title: 'From Hanoi',
  data: [
    { name: 'Hanoi - Saigon', price: '$5.00' },
    { name: 'Hanoi - Da Nang', price: '$5.00' },
    { name: 'Hanoi - Phu Quoc', price: '$7.50' },
    { name: 'Hanoi - Da Nang - Saigon', price: '$10.00' },
    { name: 'Hanoi - Saigon - Phu Quoc', price: '$14.00' },
    { name: 'Hanoi - Ha Giang', price: '$3.00' },
    { name: 'Hanoi - Ha Long', price: '$3.00' },
    { name: 'Hanoi - Ha Long - Ha Giang', price: '$3.00' },
  ],
  },
  {
  title: 'From Saigon',
  data: [
    { name: 'Saigon - Hanoi', price: '$5.00' },
    { name: 'Saigon - Da Nang', price: '$5.00' },
    { name: 'Saigon - Phu Quoc', price: '$8.50' },
    { name: 'Sai gon - Da Nang - Hanoi', price: '$11.00' },
    { name: 'Sai gon - Phu Quoc - Da Nang - Hanoi', price: '$15.50' },
    { name: 'Saigon - Vung Tau - Phu Quoc', price: '$3.00' },
    { name: 'Saigon - Nha Trang - Phu Quoc', price: '$3.75' },
    { name: 'Saigon - Vung Tau - Da Lat', price: '$6.00' },
    { name: 'Saigon - Nha Trang - Da Lat', price: '$4.00' },
  ], 
  },
];

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={menuStyles.headerStyle}>
      <Text style={menuStyles.sectionHeader}>{title}</Text>
    </View>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}></SectionList>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 20,
  },
  headerStyle: {
    backgroundColor: '#F4CE14',
  },
  sectionHeader: {
    color: 'black',
    fontSize: 26,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});

export default MenuItems;