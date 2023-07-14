import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const infoURL = "http://localhost:8080/api/info"

export default function App() {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);

    useEffect(() => {
        fetch(infoURL)
            .then((resp) => resp.json())
            .then((json) => {
                setData(json)

            })
            .catch((error) => console.error(error))
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.head} >Movie List</Text>
            <Text style={styles.einleitung}>Folgend eine Liste aus einem API Endpoint:</Text>
            <View style={{ borderBottomWidth: 10, marginBottom: 15 }}></View>
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <View>

                        <Text style={styles.body}>{item.body}</Text>
                        <View style={{ borderBottomWidth: 2, marginBottom: 15 }}></View>
                    </View>
                )}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
    },
    head: {
        fontSize: 150

    },
    einleitung: {
        fontSize: 40

    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        padding: 5
    },
    body: {
        fontSize: 15

    }
});
