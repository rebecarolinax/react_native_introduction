
import { Header } from './src/components/Header';
import { Home } from './src/screens/Home'
import { useFonts, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import Container from './src/components/Container';

export default function App() {

  // hook para uso das fontes 
  let [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    // componentes na raiz do projeto (app.js)
    <Container>
      <StatusBar
        // como os elementos da barra de notificações
        backgroundColor="#FECC2B"
        barStyle="dark-content"
      />
      <Header />

      <Home />
    </Container>
  );
}

