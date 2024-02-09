import React, { useState } from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import { useRouter } from "expo-router"
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import Logo from './assets/images/AWB_Icon.png';


const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  //Eingabe wird erfasst df
  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  //Username wird in Local Storage abgespeichert
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('Username', username);
    } catch (e) {
      // saving error
    }
    console.log('Daten saved')
  };

  const handleLogin = () => {
    //Username uns Passwort werden aus Local Storage entnommen
    const storedUsername = sessionStorage.getItem('username')
    const storedPassword = sessionStorage.getItem('password')

    //EIngabe wird mit gespeicherten Daten abgeglichen
    if (username === storedUsername && password === storedPassword) {
      storeData();
      console.log('Erfolgreich eingeloggt');
      router.push("/testApicall");

    } else {
      console.log('Falscher Benutzername oder Passwort');
    }

  };

  const handleRegister = () => {
    sessionStorage.setItem('username', username)
    sessionStorage.setItem('password', password)

    console.log('Register button clicked');
  };

  return (

    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode='contain' />
      <View style={styles.inputContainer}>
        <AntDesign name="user" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Benutzername"
          value={username}
          onChangeText={handleUsernameChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <AntDesign name="lock" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Passwort"
          secureTextEntry
          value={password}
          onChangeText={handlePasswordChange}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Anmelden" onPress={handleLogin} />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Registrieren" onPress={handleRegister} />
      </View>

    </View>

  );
};



export default LoginForm;
