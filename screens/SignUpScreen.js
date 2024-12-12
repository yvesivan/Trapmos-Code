import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Alert } from 'react-native';
import { auth, createUserWithEmailAndPassword } from './firebase';  // Ensure both are imported from firebase.js
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';  // For the Apple icon

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  // Basic email validation
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Handle the sign-up process
  const handleSignUp = async () => {
    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      alert('Sign Up Successful!');
      navigation.navigate('Login');  // Navigate to Login screen after successful signup
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('This email is already registered. Please log in.');
      } else if (error.code === 'auth/weak-password') {
        alert('Password should be at least 6 characters long.');
      } else {
        alert(error.message);  // Display other error messages
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={require('../images/trapmosLogin.png')} style={styles.logo} />
      </View>

      <View style={styles.formSection}>
        {/* Tab for navigating between login and signup */}
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.tabTextInactive}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={styles.tabTextActive}>Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* Name input field */}
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#a9a9a9"
        />
        {/* Email input field */}
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#a9a9a9"
        />
        {/* Password input field */}
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#a9a9a9"
        />
        {/* Confirm password input field */}
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholderTextColor="#a9a9a9"
        />

        {/* Sign Up button */}
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>

        {/* Alternative sign-up option with Apple */}
        <Text style={styles.orText}>or sign up with</Text>
        <TouchableOpacity style={styles.appleButton}>
          <FontAwesome name="apple" size={24} color="#fff" />
          <Text style={styles.appleButtonText}>Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b2a38',
  },
  topSection: {
    height: '25%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  formSection: {
    flex: 1,
    backgroundColor: '#1b2a38',
    alignItems: 'center',
    paddingTop: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 30,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#dedede',
  },
  activeTab: {
    backgroundColor: '#3ca25f',
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tabTextInactive: {
    color: '#1b2a38',
  },
  input: {
    backgroundColor: '#324a5e',
    borderRadius: 25,
    height: 50,
    width: '80%',
    paddingHorizontal: 15,
    color: '#fff',
    marginBottom: 15,
  },
  signUpButton: {
    backgroundColor: '#d3d3d3',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginVertical: 15,
  },
  signUpButtonText: {
    color: '#1b2a38',
    fontWeight: 'bold',
  },
  orText: {
    color: '#a9a9a9',
    fontSize: 14,
    marginVertical: 10,
  },
  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 25,
    height: 50,
    width: '80%',
    justifyContent: 'center',
  },
  appleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default SignUpScreen;
