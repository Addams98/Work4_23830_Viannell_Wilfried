import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ThemeToggleButton from './ui';


const { width, height } = Dimensions.get('window');

const DrawerItem = ({ name, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
      <MaterialIcons name={icon} size={24} color="#000000" style={styles.drawerItemIcon} />
      <Text style={styles.drawerItemText}>{name}</Text>
    </TouchableOpacity>
  );
};

const DrawerContent = ({ closeDrawer }) => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    closeDrawer();
    navigation.navigate(screenName);
  };

  return (
    <ScrollView contentContainerStyle={styles.drawerContent}>
      <DrawerItem
        name="Profile"
        icon="account-circle"
        onPress={() => handleNavigation('Profile')}
      />
      <DrawerItem
        name="Calculator"
        icon="calculate"
        onPress={() => handleNavigation('CalculatorScreen')}
      />
      <DrawerItem
        name="Contact"
        icon="contacts"
        onPress={() => handleNavigation('ContactsScreen')}
      />
    </ScrollView>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isNightMode, setIsNightMode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNavigation = (screenName) => {
    closeDrawer();
    navigation.navigate(screenName);
  };

  const handleToggleTheme = () => {
    setIsNightMode((prevIsNightMode) => !prevIsNightMode);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <ImageBackground source={require('./blue.jpg')} style={styles.backgroundImage}>
      <View style={[styles.container, isNightMode && styles.containerDark]}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.drawerButton}>
          <MaterialIcons name="menu" size={24} color={isNightMode ? '#FFFFFF' : '#000000'} />
        </TouchableOpacity>

        {isDrawerOpen && <DrawerContent closeDrawer={closeDrawer} />}

        <View style={styles.contentContainer}>
          <Text style={styles.contentText}> Welcomw to Wilfried Application </Text>
          

        </View>

        <View style={styles.themeButtonContainer}>
          <ThemeToggleButton
            isNight={isNightMode}
            onPress={handleToggleTheme}
            style={styles.themeButton}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerDark: {
    backgroundColor: '#2E2E2E',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: width,
    height: height,
  },
  drawerButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
  },
  drawerContent: {
    flex: 1,
    backgroundColor: 'rgba(245, 245, 245, 0.9)',
    paddingTop: 80,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  drawerItemIcon: {
    marginRight: 15,
  },
  drawerItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '000000',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  contentText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  themeButtonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  themeButton: {
    alignSelf: 'center',
  },
});



export default HomeScreen;
