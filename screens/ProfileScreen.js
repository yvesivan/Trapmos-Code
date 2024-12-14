import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Switch, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../context/UserContext'; // Import the shared context

export default function ProfileScreen({ navigation }) {
  const { user } = useContext(UserContext); // Access user details from context
  
  // State for sound and vibration switches
  const [soundEnabled, setSoundEnabled] = useState(true); // Default is on
  const [vibrationEnabled, setVibrationEnabled] = useState(true); // Default is on

  return (
    <View style={styles.container}>
      {/* Set the Status Bar */}
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual profile image URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{user.name || 'Name not set'}</Text>
        <Text style={styles.profileEmail}>{user.email || 'Email not set'}</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Sound</Text>
          <Switch 
            value={soundEnabled} 
            onValueChange={() => setSoundEnabled(previousState => !previousState)} // Toggle state
          />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Vibration</Text>
          <Switch 
            value={vibrationEnabled} 
            onValueChange={() => setVibrationEnabled(previousState => !previousState)} // Toggle state
          />
        </View>
      </View>

      {/* Device Settings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Device Settings</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Device ID</Text>
          <Text style={styles.settingValue}>xxxx-xxxx</Text>
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Last Synced</Text>
          <Text style={styles.settingValue}>11/02/2024</Text>
        </View>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000', // Black background
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: -25,
    marginTop: 40, // Increased marginTop to lower the header
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff', // White text
    marginLeft: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 30,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#3ca25f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  section: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  settingValue: {
    fontSize: 16,
    color: '#666',
  },
});
