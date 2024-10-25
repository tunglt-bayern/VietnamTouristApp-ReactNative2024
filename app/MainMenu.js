import * as React from 'react';
import { ScrollView, Text, View, StyleSheet, FlatList } from 'react-native';

const menuItemsToDisplay = [
  { name: 'Hanoi - Saigon', price: '$5.00', id: '1A' },
  { name: 'Hanoi - Da Nang', price: '$5.00', id: '2B' },
  { name: 'Hanoi - Phu Quoc', price: '$7.50', id: '3C' },
  { name: 'Saigon - Hanoi', price: '$5.00', id: '4D' },
  { name: 'Saigon - Da Nang', price: '$5.00', id: '5E' },
  { name: 'Saigon - Phu Quoc', price: '$8.50', id: '6F' },
  { name: 'Ha noi - Da Nang - Saigon', price: '$10.00', id: '7G' },
  { name: 'Ha Noi - Saigon - Phu Quoc', price: '$14.00', id: '8H' },
  { name: 'Sai gon - Da Nang - Hanoi', price: '$11.00', id: '9I' },
  { name: 'Sai gon - Phu Quoc - Da Nang - Hanoi', price: '$15.50', id: '10J' },
  { name: 'Hanoi - Ha Giang', price: '$3.00', id: '11K' },
  { name: 'Hanoi - Ha Long', price: '$3.00', id: '12L' },
  { name: 'Hanoi - Ha Long - Ha Giang', price: '$3.00', id: '13M' },
  { name: 'Saigon - Vung Tau - Phu Quoc', price: '$3.00', id: '14N' },
  { name: 'Saigon - Nha Trang - Phu Quoc', price: '$3.75', id: '15O' },
  { name: 'Saigon - Vung Tau - Da Lat', price: '$6.00', id: '16Q' },
  { name: 'Saigon - Nha Trang - Da Lat', price: '$4.00', id: '17R' },
];

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  return (
    <View style={menuStyles.container}>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}></FlatList>
    </View>
  );
};

// Add styles to the component
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
});

export default MenuItems;
