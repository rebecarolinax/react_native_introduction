
import { Header } from './src/components/Header';
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import Container from './src/components/Container';

export default function App() {

  // hook para uso das fontes 
  let [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    // componentes na raiz do projeto (app.js)
    <Container>
      <StatusBar
        backgroundColor="#FECC2B"
        barStyle="dark-content"
      />
      <Header />
    </Container>
  );
}

