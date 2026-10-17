import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screen dari folder src/screens/
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';

// Import Icon dari Lucide (jika sudah di-install)
import { Home, Map, History, User } from 'lucide-react-native';

// Screen Placeholder Sementara (Untuk Orang 3 & Orang 4 nantinya)
const MapScreen = () => <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text>Halaman Peta (Tugas Orang 3)</Text></View>;
const HistoryScreen = () => <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text>Halaman Riwayat (Tugas Orang 3)</Text></View>;
const ProfileScreen = () => <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text>Halaman Profil (Tugas Orang 4)</Text></View>;

const Tab = createBottomTabNavigator();

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  // Timer 2.5 detik untuk pindah dari Splash Screen ke Beranda
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // 1. Tampilkan Splash Screen dulu
  if (isShowSplash) {
    return <SplashScreen />;
  }

  // 2. Setelah 2.5 detik, tampilkan Navigasi Utama
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