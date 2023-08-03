import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Image, Text, StyleSheet } from 'react-native';
import { useRouter } from "expo-router"
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const testApicall = () => {

    const [username, setUsername] = useState('');
    const [vorname, setVorname] = useState('');
    const [nachname, setNachname] = useState('');
    const [email, setEmail] = useState('');


    const router = useRouter();

    useEffect(() => {
        load();
        getSessionId();
    }, []);


    //Session ID wird vom Server empfangen und in Local storage abgespeichert
    const getSessionId = async () => {
        try {
            //Sendet Get Anfrage
            const response = await axios.get('http://localhost:8080/api/start');
            // Extrahieren Sie die Sitzungs-ID aus der Antwort des Servers.
            const sessionId = response.data.sessionId;
            //Speichert Session ID in Local Storage
            await AsyncStorage.setItem('session_id', sessionId);
            console.log(`Sitzungs-ID vom Server gespeichert: ${sessionId}`);
        } catch (error) {
            console.log('Fehler beim Abrufen der Sitzungs-ID', error);
        }
    };


    //Läd Username aus Local Storage
    const load = async () => {
        try {
            let name = await AsyncStorage.getItem('Username')

            if (name != null) {
                setUsername(name);
            }
        } catch (e) {
            // read error
        }

        console.log('Done.')
    }



    return (

        <View style={styles.container}>
            <Text style={styles.text}>Hi {username}</Text>
            <View style={styles.profileInfo}>
                <Text style={styles.infoLabel}>Vorname:</Text>
                <Text style={styles.infoValue}>{vorname}</Text>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.infoLabel}>Nachname:</Text>
                <Text style={styles.infoValue}>{nachname}</Text>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.infoLabel}>E-Mail Adresse:</Text>
                <Text style={styles.infoValue}>{email}</Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: 'normal',

    },
    profileInfo: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoLabel: {

        marginRight: 10,
        fontSize: 30,
    },
    infoValue: {
        fontSize: 16,
    },
});


export default testApicall;
