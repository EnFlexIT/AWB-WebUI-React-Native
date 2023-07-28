import { Button, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from 'react';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from "uuid";
import AsyncStorage from '@react-native-async-storage/async-storage';

// {`${myFunction()}`}

var AgentworkbenchRestApi = require('./awbapi/index');
var apiCli = new AgentworkbenchRestApi.ApiClient();
var api = new AgentworkbenchRestApi.AdminsApi(apiCli); // Allocate the API class we're going to use.



export default function Page() {
  const router = useRouter();

  const [osDescription, setOsDescription] = useState('');
  const [osFam, setOsFam] = useState('');
  const [osManufacturer, setOsManufacturer] = useState('');
  const [osVersion, setOsVersion] = useState('');
  const [processorFrequenceInMhz, setProcessorFrequenceInMhz] = useState('');
  const [processorName, setProcessorName] = useState('');
  const [processorNoLogical, setProcessorNoLogical] = useState('');
  const [processorNoPhysical, setProcessorNoPhysical] = useState('');
  const [swapMemoryTotalInGB, setSwapMemoryTotalInGB] = useState('');

  useEffect(() => {
    const sessionId = getSessionId();
    console.log(sessionId);
    api.infoGet(display);
  }, []);

  const getSessionId = async () => {
    try {
      // Versuche die Sitzungs-ID aus dem Speicher zu laden
      const sessionId = await AsyncStorage.getItem('session_id');
      if (sessionId === null) {
        // Wenn es keine gespeicherte Sitzungs-ID gibt, erzeuge eine neue
        const newSessionId = uuidv4();
        await AsyncStorage.setItem('session_id', newSessionId);
        return newSessionId;
      }
      return sessionId;
    } catch (e) {
      // Behandle den Fehler hier
      console.error(e);
    }
  };



  function display(error, data, response) {
    console.log(data);
    setOsFam(data.osFamilly);
    setOsDescription(data.osDescription);
    setOsManufacturer(data.osManufacturer);
    setOsVersion(data.osVersion);
    setProcessorFrequenceInMhz(data.processorFrequenceInMhz);
    setProcessorName(data.processorName);
    setProcessorNoLogical(data.processorNoLogical);
    setProcessorNoPhysical(data.processorNoPhysical);
    setSwapMemoryTotalInGB(data.swapMemoryTotalInGB);
  }


  return (
    <><View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Zum Log In</Text>

        <Button style={styles.button}
          title="Login"
          onPress={() => router.push("/Login")} />
      </View>

    </View>
      <View style={styles.listContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>osDescription:</Text>
          <Text style={styles.value}>{osDescription}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>osFamilly:</Text>
          <Text style={styles.value}>{osFam}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>osManufacturer:</Text>
          <Text style={styles.value}>{osManufacturer}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>osVersion:</Text>
          <Text style={styles.value}>{osVersion}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>processorFrequenceInMhz:</Text>
          <Text style={styles.value}>{processorFrequenceInMhz}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>processorName:</Text>
          <Text style={styles.value}>{processorName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>processorNoLogical:</Text>
          <Text style={styles.value}>{processorNoLogical}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>processorNoPhysical:</Text>
          <Text style={styles.value}>{processorNoPhysical}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>swapMemoryTotalInGB:</Text>
          <Text style={styles.value}>{swapMemoryTotalInGB}</Text>
        </View>
      </View></>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  button: {
    width: 50,
    alignItems: "baseline",
    marginTop: 10,
  },
  listContainer: {
    flex: 2,
    alignItems: 'flex-start',
    marginTop: 50,
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  label: {
    flex: 2,
    fontWeight: 'bold',
    fontSize: 25,
    alignItems: 'flex-start',
  },
  value: {
    flex: 2,
    fontSize: 25,
    marginLeft: 10,
  }
});
