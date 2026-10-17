import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Map, History, User } from 'lucide-react-native';

// Layar yang sudah ada
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';

// Placeholder sementara: file di src/screens/ (MapScreen, HistoryScreen,
// ProfileScreen) masih kosong, jadi jangan di-import dulu agar tidak crash.
const MapScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Halaman Peta (Tugas Orang 3)</Text>
  </View>
);
const HistoryScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Halaman Riwayat (Tugas Orang 3)</Text>
  </View>
);
const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Halaman Profil (Tugas Orang 4)</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  // Tampilkan Splash Screen selama 2,5 detik
  useEffect(() => {
    const timer = setTimeout(() => setIsShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isShowSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2563EB',
          tabBarInactiveTintColor: '#94A3B8',
          tabBarStyle: { height: 60, paddingBottom: 8, paddingTop: 8 },
        }}
      >
        <Tab.Screen
          name="Beranda"
          component={HomeScreen}
          options={{ tabBarIcon: ({ color }) => <Home color={color} size={22} /> }}
        />
        <Tab.Screen
          name="Peta"
          component={MapScreen}
          options={{ tabBarIcon: ({ color }) => <Map color={color} size={22} /> }}
        />
        <Tab.Screen
          name="Riwayat"
          component={HistoryScreen}
          options={{ tabBarIcon: ({ color }) => <History color={color} size={22} /> }}
        />
        <Tab.Screen
          name="Profil"
          component={ProfileScreen}
          options={{ tabBarIcon: ({ color }) => <User color={color} size={22} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
