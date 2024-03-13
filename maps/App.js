import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState, useRef } from 'react';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import {
  requestForegroundPermissionsAsync, //solicito a permissão de localização
  getCurrentPositionAsync, // captura a localização atual

  watchPositionAsync, // captura em tempos a localização
  LocationAccuracy // precisão de captura

} from 'expo-location'

import MapViewDirections from 'react-native-maps-directions';

import { mapsKey } from './utils/MapsKey';


export default function App() {
  const mapReference = useRef(null);

  const [initialPosition, setInitialPosition] = useState(null);
  const [finalPosition, setFinalPosition] = useState(
    {
      latitude: -23.6700,
      longitude: -46.4486
    }
  )

  async function captureLocation() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setInitialPosition(currentPosition);
    }
  }
  async function MapReloadView() {
    if (mapReference.current && initialPosition) {
      await mapReference.current.fitToCoordinates(
        [
          {
            latitude: initialPosition.coords.latitude,
            longitude: initialPosition.coords.longitude
          },
          {
            latitude: finalPosition.latitude,
            longitude: finalPosition.longitude
          }
        ],
        {
          edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
          animated: true
        }

      )
    }
  }

  useEffect(() => {
    captureLocation()

    // captura a localização em tempo real
    watchPositionAsync({
      accuracy: LocationAccuracy.High,
      timeInterval: 1000,
      distanceInterval: 1
    }, async (response) => {
      setInitialPosition(response)

      mapReference.current?.animatedCamera({
        pitch: 60,
        center: response.coords
      })
    })
  }, [1000]);

  useEffect(() => {
    MapReloadView();
  }, [initialPosition]);

  return (
    <View style={styles.container}>
      {initialPosition !== null ? (
        <MapView
          ref={mapReference}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={grayMapStyle}
          initialRegion={{
            latitude: initialPosition.coords.latitude,
            longitude: initialPosition.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }}
        >
          {/* Marcador para a localização atual */}
          <Marker
            coordinate={{
              latitude: initialPosition.coords.latitude,
              longitude: initialPosition.coords.longitude
            }}
            title="Sua Localização Atual"
            pinColor="blue"
          />

          {/* Marcador para o outro ponto demarcado */}
          <Marker
            coordinate={{
              latitude: -23.70184,
              longitude: -46.40449
            }}
            title="❤︎₊ ⊹ SENAI ⊹ ₊❤︎"
            description="AAAAAAAAA"
            pinColor="red"
          />

          {/* Direções do ponto atual para o ponto demarcado */}
          <MapViewDirections
            origin={initialPosition.coords}
            destination={{
              latitude: -23.70184, // Latitude do segundo ponto
              longitude: -46.40449, // Longitude do segundo ponto
            }}
            apikey={mapsKey}
            strokeWidth={5}
            strokeColor="#496BBA"
          />
        </MapView>
      ) : (
        <>
          <Text>Localização não encontrada</Text>
          <ActivityIndicator />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%'
  }
});

const grayMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#E1E0E7",
      },
    ],
  },
  {
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: -5,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#33303E",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#66DA9F",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1B1B1B",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#C6C5CE",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ACABB7",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#8EA5D9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
];

