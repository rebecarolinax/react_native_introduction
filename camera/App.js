import { Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';

import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const cameraRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [typeCamera, setTypeCamera] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync() //define acesso a camêra
    })();
  }, [])

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync()
      setPhoto(photo.uri)
      setOpenModal(true)

      console.log(photo)
    }
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ratio='16:9' type={typeCamera} ref={cameraRef}>
        <View style={styles.viewFlip}>
          <TouchableOpacity style={styles.buttonFlip} onPress={() => setTypeCamera(typeCamera == CameraType.back ? CameraType.front : CameraType.back)}>
            <MaterialIcons style={{ position: 'relative', top: 0, left: 90, zIndex: 999 }} name="flip-camera-android" size={50} color="black" />
          </TouchableOpacity>
        </View>
      </Camera >

      <TouchableOpacity style={styles.buttonCapture} onPress={() => CapturePhoto()}>
        <MaterialIcons name="photo-camera" size={50} color="white" />
      </TouchableOpacity>

      <Modal animationType='slide' transparent={false} visible={openModal}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
          <View style={{ margin: 10, flexDirection: 'row' }}>
            {/* botões de controle */}
          </View>
          <Image
            styele={{ width: '100%', height: 500, borderRadius: 15 }}
            source={{ uri: photo }}
          />
        </View>
      </Modal>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    height: '80%',
    width: '100%'
  },
  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  buttonFlip: {
    padding: 20
  },
  textFlip: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20
  },
  buttonCapture: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
