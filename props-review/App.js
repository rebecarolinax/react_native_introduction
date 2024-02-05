
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person/Person';
import { useFonts, Cairo_700Bold, } from '@expo-google-fonts/cairo';

export default function App() {

  // para import das fonts
  let [fontsLoaded, fontError] = useFonts({
    Cairo_700Bold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // lista flatlist
  const peopleList = [
    { id: 1, name: 'Rebeca', age: '16' },
    { id: 2, name: 'Gustavo', age: '18' },
    { id: 1, name: 'Carlos', age: '37' },
  ]


  return (
    <SafeAreaView>
      <StatusBar />

      {/* flatlist */}
      <FlatList
        data={peopleList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          //exibir cada item da lista
          <Person name={item.name} age={item.age} />
        )}
      />

    </SafeAreaView>
  );
}