import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FullscreenImageScreen({ route, navigation }) {
  const { imageUrl } = route.params; // Get image URL from params

  return (
    <View style={styles.container}>
      {/* Set the Status Bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fullscreen Image</Text>
      </View>

      {/* Fullscreen Image */}
      <Image source={imageUrl} style={styles.fullscreenImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center', // Vertically center both items
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 1,
  },
  backButton: {
    padding: 10,
    marginTop: 20, // Lower the back button by adding top margin
  },
  headerTitle: {
    flex: 1, // Ensures the title takes the remaining space
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 1,
    textAlign: 'center', // Center the header title
    marginTop: 20, // Lower the header title to align with the back button
  },
  fullscreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
