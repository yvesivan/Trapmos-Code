import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import AlertsScreen from './screens/AlertsScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import ProfileScreen from './screens/ProfileScreen';
import FullscreenImageScreen from './screens/FullscreenImageScreen'; // Import Fullscreen Image Screen
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Simulate a delay for the splash screen
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer); // Clean up timer
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Conditional Splash Screen */}
        {showSplash && <Stack.Screen name="Splash" component={SplashScreen} />}
        {!showSplash && (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="Alerts" component={AlertsScreen} />
            <Stack.Screen name="Statistics" component={StatisticsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            {/* Add Fullscreen Image Screen */}
            <Stack.Screen name="FullscreenImage" component={FullscreenImageScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
