// ?  import do React/Expo
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// ? import dos ícones/vetores
import { Ionicons } from '@expo/vector-icons';

// ? import dos recursos expo-notifications
import * as Notifications from 'expo-notifications'

// ? solicita permissão de notificação ao iniciar o APP
Notifications.requestPermissionsAsync();

// ? define como as notificações devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    // * mostrar o "alert" quando a notificação for recebida
    shouldShowAlert: true,
    // * reproduz rs ao receber notificação
    shouldPlaySound: true,
    // * número de notificações no ícone do APP
    shouldSetBadge: true
  })
})

export default function App() {

  // ! função para lidar com a chamada de notificação
  const HandleCallNotifications = async () => {
    // ! obtém o resultado da permissão
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
      alert("Notificações desativadas!")
      return;
    }
    // ! agenda uma notificação
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bem-Vindo(a) ao SENAI!",
        body: "Notificação recebida.",
      },
      trigger: null
    })

  }









  return (
    <View style={styles.container}>
      <Ionicons name="notifications-circle-outline" size={150} color="deeppink" onPress={HandleCallNotifications} />
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
  }
});
