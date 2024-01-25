import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* <Text style={styles.textLogin}>
        Conectar
      </Text> */}

      <Image
        style={styles.user}
        source={require('./src/assets/userProfile.png')}
      />



      <Text style={styles.label}>
        Email
      </Text>

      <TextInput
        style={styles.input}
        defaultValue='Digite o seu e-mail:' />

      <Text style={styles.label}>
        Senha
      </Text>

      <TextInput
        style={styles.input}
        defaultValue='Digite a sua senha:'
      />

      <TouchableOpacity style={styles.entrar}>
        <Text style={styles.textEntrar}> Acessar </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

// const [fonts, loadFonts] = useFonts({
//   Roboto: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
// });



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },

  textWelcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  user: {
    width: 200,
    height: 200,
    marginTop: 15
  },

  textLogin: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 20
  },

  input: {
    width: '80%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    backgroundColor: 'transparent',
    paddingLeft: 5,
  },

  entrar: {
    width: '30%',
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'black',
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center"
  },

  textEntrar: {
    fontWeight: '500',
    textTransform: 'uppercase',
    color: 'white'
  },

  label: {
    // marginRight: 230,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
});
