import { useState } from 'react';
import { Alert, Image, StatusBar, StyleSheet } from 'react-native';
import { Container } from './src/components/Container/Container';
import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';
import { Title, TitleBtn, TitleCount } from './src/components/Title/Title'
import { BtnDecrement, BtnIncrement } from './src/components/Button/Button'
import { Poppins_900Black, Poppins_600SemiBold_Italic, Poppins_100Thin, Poppins_700Bold } from '@expo-google-fonts/poppins'

export default function App() {

  // hook
  const [count, setCount] = useState(0);

  // função para incrementar 
  const increment = () => {
    setCount(count + 1)
  }

  // função para decrementar 
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    else {
      Alert.alert('Impossível decrementar!')
    }

  }

  let [fontsLoaded, fontError] = useFonts({
    DancingScript_400Regular,
    Poppins_900Black,
    Poppins_600SemiBold_Italic,
    Poppins_100Thin,
    Poppins_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Container>

      <Image style={styles.clock}
        source={require('./src/assets/image/clock.png')}
      />

      <Title>Contador:</Title>
      <TitleCount>{count}</TitleCount>

      <BtnIncrement onPress={increment}>
        <TitleBtn>Incrementar</TitleBtn>
      </BtnIncrement>

      <BtnDecrement onPress={decrement}>
        <TitleBtn>Decrementar</TitleBtn>
      </BtnDecrement>

      <StatusBar style="auto" />

    </Container>
  );
}

const styles = StyleSheet.create({
  clock: {
    width: 300,
    height: 300,
  },
});
