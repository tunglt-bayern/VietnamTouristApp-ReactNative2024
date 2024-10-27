import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Platform, KeyboardAvoidingView } from 'react-native';

export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = useState('');
  const [mobile, onChangeMobileNumber] = useState('');
  const [place, onChangePlace] = useState('');

  return (

      <ScrollView style={styles.container} keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>Welcome to Vietnam Local</Text>
        <Text style={styles.regularText}>
          Vietnam Local was born with the mission to help international friends travel more easily and enjoy more fun while visiting Vietnam!
        </Text>
        <TextInput
          style={styles.inputBox}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder="Your name:"
        />
        <TextInput
          style={styles.input}
          value={mobile}
          onChangeText={onChangeMobileNumber}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.messageInput}
          value={place}
          onChangeText={onChangePlace}
          placeholder="Enter your place"
        />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#F4CE14',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#F4CE14',
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#F4CE14',
  },
});
