import { Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useEffect, useRef, useState } from 'react';

import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from "expo-media-library" // para usar todas as ferramentas da biblioteca

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const cameraRef = useRef(null); //referência da camêra
  const [openModal, setOpenModal] = useState(false); //abrir fechar modal de imagem
  const [photo, setPhoto] = useState(null); //caralho da foto
  const [typeCamera, setTypeCamera] = useState(CameraType.back); //câmera traseira ou câmera frontal

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync() //define acesso à camêra
      const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync() //define acesso à galeria 
    })();
  }, [])

  async function CapturePhoto() {
    if (cameraRef) { //pegou a referência aqui 
      const photo = await cameraRef.current.takePictureAsync(); //  the photo
      setPhoto(photo.uri)
      setOpenModal(true) // chama o modal de aparecer lá

      console.log(photo) // aparece lá no terminal
    }
  }

  function ClearPhoto() {
    setPhoto(null)
    setOpenModal(false)
  }

  async function UploadPhoto() {
    await MediaLibrary.createAssetAsync(photo) // ferramenta que baixa a foto na galeria
      .then(() => {
        alert("A foto foi salva com sucesso!")
      })
      .catch(error => {
        alert("Não foi possível salvar a foto!")
      })
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ratio='16:9' type={typeCamera} ref={cameraRef}>
        <View style={styles.viewFlip}>
          <TouchableOpacity style={styles.buttonFlip} onPress={() => setTypeCamera(typeCamera == CameraType.back ? CameraType.front : CameraType.back)}>
            <MaterialIcons name="flip-camera-android" size={50} color="white" />
          </TouchableOpacity>
        </View>
      </Camera >

      <TouchableOpacity style={styles.buttonCapture} onPress={() => CapturePhoto()}>
        <MaterialIcons name="photo-camera" size={50} color="white" />
      </TouchableOpacity>

      <Modal animationType='slide' transparent={false} visible={openModal}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
          <View style={{ margin: 10, flexDirection: 'row', gap: 20 }}>


            <TouchableOpacity style={styles.buttonClear} onPress={() => ClearPhoto()}>
              <MaterialCommunityIcons name="trash-can" size={50} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonUpload} onPress={() => UploadPhoto()}>
              <MaterialIcons name="upload" size={50} color="#121212" />
            </TouchableOpacity>

          </View>
          <Image
            style={{ width: '100%', height: 500, borderRadius: 15 }}
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
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonClear: {
    padding: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonUpload: {
    padding: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
