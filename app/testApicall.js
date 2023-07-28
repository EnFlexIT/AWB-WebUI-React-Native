import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Image, Text, StyleSheet } from 'react-native';
import { useRouter } from "expo-router"
import AsyncStorage from '@react-native-async-storage/async-storage';


const testApicall = () => {

    const [username, setUsername] = useState('');
    const [vorname, setVorname] = useState('');
    const [nachname, setNachname] = useState('');
    const [email, setEmail] = useState('');


    const router = useRouter();

    useEffect(() => {
        load();
    }, []);

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
