import { useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';

export default function App() {

  // // para import das fonts
  // let [fontsLoaded, fontError] = useFonts({
  //   Poppins_500Medium
  // });
  // if (!fontsLoaded && !fontError) {
  //   return null;
  // }

  // hook
  const [count, setCount] = useState(0);

  // função para incrementar 
  const increment = () => {
    setCount(count + 1)
  }

  // função para decrementar 
  const decrement = () => {
    setCount(count - 1)
  }

  //effect
  // useEffect(() => {
  //   console.warn(`Contador atualizado: ${count}`)
  // }, [count])

  return (
    <View style={styles.container}>
      <Image style={styles.clock}
        source={require('./src/assets/image/clock.png')}
      />

      <Text style={styles.txt}>Contador:</Text>
      <Text style={styles.count}>{count}</Text>



      <TouchableOpacity onPress={increment} style={styles.btn}>
        <Text style={styles.txtBtn}>Incrementar</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={decrement} style={styles.btn_}>
        <Text style={styles.txtBtn}>Decrementar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40
  },
  txt: {
    fontFamily: 'Poppins_500Medium',
    textTransform: 'uppercase'
  },
  btn: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'blue',
    alignItems: "center",
    justifyContent: "center"
  },
  btn_: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center"
  },
  txtBtn: {
    color: 'white',
    fontFamily: 'Poppins_500Medium',
    textTransform: 'uppercase'
  },

  clock: {
    width: 300,
    height: 300,

  }
});
