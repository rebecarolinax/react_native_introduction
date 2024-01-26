
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  return (
    <SafeAreaView>

      <StatusBar />

      <Person
        name='Rebeca'
        age={16} />
      <Person
        name='Carolina'
        age={16} />
    </SafeAreaView>
  );
}