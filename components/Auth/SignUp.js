import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import AuthService from '../../services/AuthService';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await AuthService.signUp(email, password);
      // Handle successful sign-up
    } catch (error) {
      // Handle sign-up error
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUp;
