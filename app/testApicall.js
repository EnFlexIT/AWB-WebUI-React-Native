import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Image, Text, StyleSheet } from 'react-native';
import { useRouter } from "expo-router"
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import MQTT from 'react-native-mqtt';


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

    // Erstelle einen neuen MQTT-Client
    MQTT.createClient({
        uri: 'hier URL',                    // URI des MQTT-Brokers 'mqtt://test.mosquitto.org:1883'
        clientId: 'your_client_id'              // Eindeutige ID für diesen Client
    }).then(function (client) {

        // Event-Handler, der aufgerufen wird, wenn die Verbindung zum MQTT-Broker geschlossen wird
        client.on('closed', function () {
            console.log('mqtt.event.closed');
        });

        // Event-Handler, der aufgerufen wird, wenn ein Fehler während der MQTT-Kommunikation auftritt
        client.on('error', function (msg) {
            console.log('mqtt.event.error', msg);
        });

        // Event-Handler, der aufgerufen wird, wenn eine Nachricht über ein abonniertes Thema empfangen wird
        client.on('message', function (msg) {
            console.log('mqtt.event.message', msg);
        });

        // Event-Handler, der aufgerufen wird, nachdem eine Verbindung zum Broker hergestellt wurde
        client.on('connect', function () {
            console.log('connected');
            client.subscribe('/data', 0);              // Abonniere das Topic "/data"
            client.publish('/data', "test-data", 0, false); // Veröffentliche eine Nachricht im Topic "/data"
        });

        // Starte den Verbindungsprozess zum MQTT-Broker
        client.connect();

    }).catch(function (err) {  // Behandle Fehler beim Erstellen des Clients
        console.log(err);
    });



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
