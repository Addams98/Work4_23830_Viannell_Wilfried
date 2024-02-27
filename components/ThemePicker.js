import React, { createContext, useState } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';

export const ThemeContext = createContext();

const ThemePicker = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    AsyncStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <View style={{ flex: 1, backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
        {children}
        <TouchableOpacity onPress={toggleTheme}>
          <Text style={{ color: '#fff' }}>Toggle Theme</Text>
        </TouchableOpacity>
      </View>
    </ThemeContext.Provider>
  );
};

export default ThemePicker;
