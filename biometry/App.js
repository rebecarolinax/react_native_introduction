import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';

// * bibliotecas de autenticação pela biometria
import * as LocalAuthentication from 'expo-local-authentication'
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';


export default function App() {
  // ? salva objeto com histórico
  const [dateHistory, setDateHistory] = useState({})
  // ? salva a referência de suporte da biometria
  const [isbiometricSupported, setIsBiometricSupported] = useState(false)

  // ? salva o status de autenticado
  const [authenticated, setAuthenticated] = useState(false)

  // ? função para verificar se existe a biometria no aparelho
  async function CheckExistAuthentication() {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    // ? salvando o status de compatibilidade com a biometria
    setIsBiometricSupported(compatible);
  }

  async function HandleAuthentication() {
    // ? verificar se existe uma biometria cadastrada:
    const biometricExist = await LocalAuthentication.isEnrolledAsync();
    if (!biometricExist) {
      return Alert.alert(
        "Falha ao logar!",
        "Biometria não cadastrada!"
      )
    }
    // ? caso exista:
    const auth = await LocalAuthentication.authenticateAsync();
    setAuthenticated(auth.success)
    // ? verificar se esta autenticado e salvar a data atual
    if (auth.success) {
      SetHistory();
    }
  }

  // ! salva o histórico da autenticação
  async function SetHistory() {
    const objectAuth = {
      dataAuthentication: moment().format('DD/MM/YYYY HH:MM:SS')
    }
    await AsyncStorage.setItem('authenticate', JSON.stringify(objectAuth))
    setDateHistory(objectAuth);
  }

  // ! recebe o histórico 
  async function GetHistory() {
    const objectAuth = await AsyncStorage.getItem('authenticate');
    if (objectAuth) {
      setDateHistory(JSON.parse(objectAuth))
    }
  }

  useEffect(() => {
    CheckExistAuthentication();
    GetHistory(); // ? buscando a última autenticação 
  })


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isbiometricSupported ? "O Seu dispositivo é compatível com a biometria" : "O seu dispositivo não é compatível com a biometria"}</Text>
      <TouchableOpacity style={styles.buttonAuth} onPress={() => HandleAuthentication()}>
        <Text style={styles.textAuth}>Autenticar acesso</Text>
      </TouchableOpacity>

      <Text style={[styles.textReturn, { color: authenticated ? "green" : "red" }]}>
        {authenticated ? "Autenticado" : "Não autenticado"}
      </Text>

      <Text>
        {
          dateHistory.dataAuthentication ? <Text style={styles.textHistory}>Último acesso em {dateHistory.dataAuthentication}</Text> : null
        }
      </Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    lineHeight: 30
  },
  buttonAuth: {
    padding: 16,
    borderRadius: 10,
    margin: 20,
    backgroundColor: '#FF1493'
  },
  textAuth: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  textReturn: {
    fontSize: 20,
    marginTop: 50,
  },
  textHistory: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#858383',
    position: 'absolute',
    bottom: 120
  }
});
