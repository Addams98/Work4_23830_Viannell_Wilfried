import React, { useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const ConnectivityListener = () => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      ToastAndroid.show(`Internet ${state.isConnected ? 'Connected' : 'Disconnected'}`, ToastAndroid.SHORT);
    });

    return () => unsubscribe();
  }, []);

  return null;
};

export default ConnectivityListener;
