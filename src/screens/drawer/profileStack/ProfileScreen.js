import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

const Profile = () => {
  const [username, setUsername] = useState('Lonnie Murphy');
  const [email, setEmail] = useState('lonnie.murphy@gmail.com');
  const [phone, setPhone] = useState('(269)-748-9882');
  const [gender, setGender] = useState('Male');
  const [dateOfBirth, setDateOfBirth] = useState('10/4/1977');

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          source={require("../../../../assets/profile.png")}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gender</Text>
          <TextInput
            style={styles.input}
            value={gender}
            onChangeText={setGender}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImageContainer: {
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 30
  },
  infoContainer: {

    padding: 20,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: 'black',
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    color: '#000',
  },
});

export default Profile;
