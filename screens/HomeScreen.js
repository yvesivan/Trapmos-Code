import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <Entypo name="dots-three-vertical" size={24} color="#ffffff" style={styles.moreIcon} />
      </View>
      <View style={styles.grid}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Profile')} // Navigate to Profile screen
        >
          <FontAwesome name="user-circle-o" size={30} color="#fff" />
          <Text style={styles.cardText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, styles.cardLight]} // White background for Statistics button
          onPress={() => navigation.navigate('Statistics')} // Navigate to Statistics screen
        >
          <MaterialIcons name="show-chart" size={30} color="#000" />
          <Text style={styles.cardTextDark}>Statistics</Text>
        </TouchableOpacity>
        {/* Alerts Button */}
        <TouchableOpacity
          style={[styles.card, styles.cardLight]} // White background for Alerts button
          onPress={() => navigation.navigate('Alerts')} // Navigate to Alerts screen
        >
          <Ionicons name="notifications-outline" size={30} color="#000" /> {/* Black icon for contrast */}
          <Text style={styles.cardTextDark}>Alerts</Text> {/* Dark text for contrast */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Map')}>
          <Entypo name="map" size={30} color="#fff" />
          <Text style={styles.cardText}>Map</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recentAlertContainer}>
        <Text style={styles.recentAlertTitle}>Recent Alert</Text>
        <TouchableOpacity style={styles.recentAlert}>
          <Text style={styles.recentAlertText}>Location A</Text>
          <Text style={styles.recentAlertSubText}>Today, 24 mins ago</Text>
          <MaterialIcons name="arrow-forward-ios" size={16} color="#000" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60, // Adjusted top padding to create more space at the top
    backgroundColor: '#0f1924',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  moreIcon: {
    marginRight: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    height: 120,
    backgroundColor: '#242424',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
  },
  cardLight: {
    backgroundColor: '#ffffff',
  },
  cardText: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 8,
  },
  cardTextDark: {
    color: '#000000',
    fontSize: 16,
    marginTop: 8,
  },
  recentAlertContainer: {
    marginTop: 20,
  },
  recentAlertTitle: {
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 10,
  },
  recentAlert: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recentAlertText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  recentAlertSubText: {
    fontSize: 12,
    color: '#000000',
  },
  arrowIcon: {
    marginLeft: 10,
  },
});
