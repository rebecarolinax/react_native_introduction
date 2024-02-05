import { FlatList, StatusBar, StyleSheet, View } from 'react-native';
import Game from './src/components/Game/Game';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function App() {

  // para import das fonts
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // lista flatlist
  const gameList = [
    { id: 1, title: 'Mario Bros', date: ' 13 de Setembro de 1985', developer: ' Nintendo' },
    { id: 2, title: 'Free Fire', date: '4 de Dezembro de 2017', developer: 'Garena International' },
    { id: 3, title: 'Stardew Valley', date: '26 de Fevereiro de 2016', developer: 'ConcernedApe' },
    { id: 4, title: 'Subway Surfers', date: '23 de Maio de 2012', developer: ' SYBO Games' },
    { id: 5, title: 'The baby in Yellow', date: '19 de Julho de 2020', developer: 'Team Terrible' },
  ]

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />


      {/* flatlist */}
      <FlatList
        data={gameList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          //exibir cada item da lista
          <Game title={item.title} date={item.date} developer={item.developer} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
