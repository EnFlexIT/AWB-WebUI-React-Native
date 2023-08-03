import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';


const KontaktForm = () => {
  const [name, setName] = useState('');
  const [vorname, setVorname] = useState('');
  const [email, setEmail] = useState('');
  const [strasse, setStrasse] = useState('');
  const [plz, setPLZ] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleVornameChange = (text) => {
    setVorname(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleStrasseChange = (text) => {
    setStrasse(text);
  };

  const handlePLZChange = (text) => {
    setPLZ(text);
  };

  /*const handleSubmit = async () => {
    const formData = {
      Name: name,
      Vorname: vorname,
      Email: email,
      Straße: strasse,
      PLZ: plz,
    };

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Daten erfolgreich übermittelt:', data);
      })
      .catch((error) => {
        console.log('Fehler beim Übermitteln der Daten:', error);
      });
  }; */

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={handleNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Vorname"
        value={vorname}
        onChangeText={handleVornameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="E-Mail"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Straße"
        value={strasse}
        onChangeText={handleStrasseChange}
      />
      <TextInput
        style={styles.input}
        placeholder="PLZ"
        value={plz}
        onChangeText={handlePLZChange}
      />
      <Button title="Bestätigen" onPress={handleSubmit} />
    </View>
  );
};


export default KontaktForm;
