import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

export default function SplashScreen() {
  return (
    <ImageBackground 
      source={require('../assets/images/splash-bg.png')} 
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/images/logo-awanin.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
        <Text style={styles.title}>awanin</Text>
        <Text style={styles.subtitle}>Know Your Air.</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logoContainer: { alignItems: 'center', marginTop: 100 },
  logo: { width: 80, height: 80 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#1E60AD', marginTop: 10 },
  subtitle: { fontSize: 14, color: '#64748B', marginTop: 4 },
});