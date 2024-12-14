import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Home Screen Component
function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
      </View>

      {/* Grid Section */}
      <View style={styles.grid}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Profile')}
        >
          <FontAwesome name="user-circle-o" size={30} color="#fff" />
          <Text style={styles.cardText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, styles.cardLight]}
          onPress={() => navigation.navigate('Statistics')}
        >
          <MaterialIcons name="show-chart" size={30} color="#000" />
          <Text style={styles.cardTextDark}>Statistics</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, styles.cardLight]}
          onPress={() => navigation.navigate('Alerts')}
        >
          <Ionicons name="notifications-outline" size={30} color="#000" />
          <Text style={styles.cardTextDark}>Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Map')}
        >
          <Entypo name="map" size={30} color="#fff" />
          <Text style={styles.cardText}>Map</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Alert Section */}
      <View style={styles.recentAlertContainer}>
        <Text style={styles.recentAlertTitle}>Recent Alert</Text>
        <TouchableOpacity style={styles.recentAlert}>
          <View>
            <Text style={styles.recentAlertText}>Location A</Text>
            <Text style={styles.recentAlertSubText}>Today, 24 mins ago</Text>
          </View>
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
    paddingTop: 60,
    backgroundColor: '#0f1924',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
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

export default HomeScreen;
