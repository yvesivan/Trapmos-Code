import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for back button

const AlertData = [
  {
    id: '1',
    location: 'Location A',
    time: 'Today, 24 mins ago',
  },
  {
    id: '2',
    location: 'Location B',
    time: 'No Aedes Mosquitoes Detected',
  },
 
];

const AlertsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Set the Status Bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alerts</Text>
      </View>

      <View style={styles.alertSection}>
        <Text style={styles.alertText}>Alert: Aedes Detected!</Text>
        <Text style={styles.timeText}>Last Detection: 24 mins ago</Text>
      </View>

      <FlatList
        data={AlertData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.locationText}>{item.location}</Text>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
    marginTop: 40, // Aligns the header below the status bar
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
  alertSection: {
    backgroundColor: '#ffcccb',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  alertText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d80000',
  },
  timeText: {
    fontSize: 14,
    color: '#333',
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AlertsScreen;
