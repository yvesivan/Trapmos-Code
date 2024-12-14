import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker, Circle, Callout } from 'react-native-maps';

export default function MapScreen({ navigation }) {
  // Coordinates for Trap-A and Trap-B
  const trapALocation = {
    latitude: 14.6357796,
    longitude: 121.0922597,
  };

  const trapBLocation = {
    latitude: 14.6415325,
    longitude: 121.0987877,
  };

  // Sample image of the Aedes mosquito, replace with actual image URL or local image
  const mosquitoImageUrl = require('../assets/Testing.jpg'); // Ensure the path is correct

  // Debugging: Log image source
  console.log("Mosquito Image Source:", mosquitoImageUrl);

  const handleMarkerAPress = () => {
    Alert.alert(
      'Health Authority Advisory: Aedes Mosquito Detected',
      'Aedes mosquitoes have been detected at this location. Immediate interventions are recommended: \n\n' +
        '- Conduct site inspection to identify and eliminate breeding sites.\n' +
        '- Deploy larvicidal treatment and fogging operations as necessary.\n' +
        '- Disseminate preventive measures and advisories to the surrounding community.\n\n' +
        'Please prioritize this area for monitoring and rapid response to prevent disease outbreaks.',
      [{ text: 'Acknowledge', onPress: () => console.log('Alert acknowledged by authorities') }]
    );
  };

  const handleMarkerBPress = () => {
    Alert.alert(
      'Status Update: No Aedes Mosquito Detected',
      'No Aedes mosquitoes have been detected at this location. Continue regular monitoring to ensure the area remains safe.',
      [{ text: 'OK', onPress: () => console.log('Status acknowledged') }]
    );
  };

  const handleImagePress = () => {
    navigation.navigate('FullscreenImage', { imageUrl: mosquitoImageUrl });
  };

  return (
    <View style={styles.container}>
      {/* Set the Status Bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Map</Text>
      </View>

      {/* Map View */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: (trapALocation.latitude + trapBLocation.latitude) / 2,
          longitude: (trapALocation.longitude + trapBLocation.longitude) / 2,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* Trap-A: Aedes Mosquito Detected */}
        <Circle
          center={trapALocation}
          radius={250}
          strokeColor="rgba(255,0,0,0.8)"
          fillColor="rgba(255,0,0,0.2)"
        />
        <Marker
          coordinate={trapALocation}
          title="Trap-A"
          description="Aedes Mosquito Detected"
          pinColor="red"
          onPress={handleMarkerAPress}
        >
          <Callout onPress={handleImagePress}>
            <View style={styles.calloutContainer}>
              <Image source={mosquitoImageUrl} style={styles.mosquitoImage} />
              <Text style={styles.calloutText}>Detected Aedes Mosquito</Text>
            </View>
          </Callout>
        </Marker>

        {/* Trap-B: No Aedes Mosquito Detected */}
        <Circle
          center={trapBLocation}
          radius={250}
          strokeColor="rgba(0,255,0,0.8)"
          fillColor="rgba(0,255,0,0.2)"
        />
        <Marker
          coordinate={trapBLocation}
          title="Trap-B"
          description="No Aedes Mosquito Detected"
          pinColor="green"
          onPress={handleMarkerBPress}
        >
          <Callout>
            <View style={styles.calloutContainerB}>
              <Text style={styles.calloutTextB}>No Aedes Mosquito Detected</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      {/* Legend */}
      <View style={styles.legend}>
        <Text style={styles.legendTitle}>Legend:</Text>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: 'red' }]} />
          <Text style={styles.legendText}>Aedes Mosquito Detected</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: 'green' }]} />
          <Text style={styles.legendText}>No Aedes Mosquito Detected</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 1,
    marginTop: 40,
    zIndex: 1,
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  legend: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  legendTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  legendColor: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginRight: 10,
  },
  legendText: {
    fontSize: 14,
  },
  calloutContainer: {
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calloutContainerB: {
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  mosquitoImage: {
    width: 150,  // Increased width for better visibility
    height: 150,  // Increased height for better visibility
    resizeMode: 'contain',  // Ensures image maintains aspect ratio
    backgroundColor: 'transparent',  // Helps identify if the image is there
  },
  calloutText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  calloutTextB: {
    fontSize: 14,
    textAlign: 'center',
    color: 'green',
  },
});
