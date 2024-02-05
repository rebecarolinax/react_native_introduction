import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        EU AMO MEU NAMORADO 💍
      </Text>
      <Image
        // aqui o objeto de imagem
        style={styles.gustavo}
        source={require('./src/assets/gustavo.jpg')}
      />
      <TextInput
        // criado o objeto de estilização
        style={styles.input}
        defaultValue='₊✧ Gustavo Magalhães do Nascimento ₊✧'
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textButton}> 𓃠 </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },

  // aqui vem a estilização da chamada
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    color: 'white',
    fontWeight: '500'
  },

  gustavo: {
    // estilização da imagem (dada o nome definido)
    width: '80%',
    height: 300,
    borderRadius: 50,
    marginTop: 25,
    marginBottom: 25
  },

  botao: {
    width: '40%',
    height: 45,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    // estilização do texto do
    color: 'black',
    fontSize: 24,
    textTransform: 'uppercase'
  },
});
