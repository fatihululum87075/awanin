import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Bell } from 'lucide-react-native';

// Import Komponen Reusable yang baru dibuat
import { AQIBadge } from '../components/aqi/AQIBadge';
import { PopularLocationCard } from '../components/aqi/PopularLocationCard';
import { RecommendationBanner } from '../components/common/RecommendationBanner';

// Dummy Data (Siap diserahkan ke Orang 2 nanti)
// Dummy Data menggunakan gambar online sementara agar tidak error
const dummyData = {
  location: "Jakarta Pusat",
  aqi: 48,
  status: "Baik",
  temp: "29°C",
  humidity: "70%",
  wind: "8 km/h",
  popularLocations: [
    { id: '1', name: 'Monas', aqi: 48, status: 'Baik', img: { uri: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=300' } },
    { id: '2', name: 'Sudirman', aqi: 62, status: 'Sedang', img: { uri: 'https://images.unsplash.com/photo-1578637387939-43c525550085?w=300' } },
    { id: '3', name: 'GBK', aqi: 55, status: 'Sedang', img: { uri: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300' } },
  ]
};

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Bar */}
      <View style={styles.header}>
        <View>
          <Text style={styles.subHeader}>Lokasi Anda</Text>
          <Text style={styles.locationTitle}>{dummyData.location} ▾</Text>
        </View>
        <TouchableOpacity style={styles.bellBtn}>
          <Bell color="#1E293B" size={20} />
        </TouchableOpacity>
      </View>

      {/* Hero AQI Card */}
      <View style={styles.aqiCard}>
        <View style={styles.circleGauge}>
          <Text style={styles.aqiValue}>{dummyData.aqi}</Text>
          <Text style={styles.aqiStatusText}>{dummyData.status}</Text>
        </View>
        <Text style={styles.adviceText}>Udara baik, nikmati harimu!</Text>
        <Text style={styles.timeText}>Diperbarui pukul 09.41 WIB</Text>
        
        {/* Weather Metrics */}
        <View style={styles.weatherRow}>
          <Text style={styles.weatherItem}>🌡️ {dummyData.temp}</Text>
          <Text style={styles.weatherItem}>💧 {dummyData.humidity}</Text>
          <Text style={styles.weatherItem}>💨 {dummyData.wind}</Text>
        </View>
      </View>

      {/* Reusable Component: Banner Rekomendasi */}
      <RecommendationBanner 
        title="Saatnya beraktivitas di luar"
        subtitle="Udara baik untuk olahraga ringan."
        onPress={() => console.log('Banner diklik')}
      />

      {/* Lokasi Populer Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Lokasi Populer</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>Lihat semua</Text>
        </TouchableOpacity>
      </View>

      {/* Reusable Component: Scroll Card Lokasi */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularList}>
        {dummyData.popularLocations.map((item) => (
          <PopularLocationCard
            key={item.id}
            name={item.name}
            aqi={item.aqi}
            status={item.status}
            imageSource={item.img}
            onPress={() => console.log(`Klik lokasi ${item.name}`)}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', paddingHorizontal: 16, paddingTop: 50 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  subHeader: { fontSize: 12, color: '#64748B' },
  locationTitle: { fontSize: 18, fontWeight: 'bold', color: '#0F172A' },
  bellBtn: { padding: 10, backgroundColor: '#FFFFFF', borderRadius: 20, elevation: 1 },
  aqiCard: { backgroundColor: '#FFFFFF', borderRadius: 24, padding: 20, alignItems: 'center', elevation: 2 },
  circleGauge: { width: 130, height: 130, borderRadius: 65, borderWidth: 8, borderColor: '#10B981', justifyContent: 'center', alignItems: 'center', marginVertical: 12 },
  aqiValue: { fontSize: 36, fontWeight: 'bold', color: '#0F172A' },
  aqiStatusText: { fontSize: 14, color: '#10B981', fontWeight: '600' },
  adviceText: { fontSize: 14, fontWeight: '600', color: '#1E293B' },
  timeText: { fontSize: 10, color: '#94A3B8', marginTop: 2 },
  weatherRow: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 16, paddingTop: 12, borderTopWidth: 1, borderTopColor: '#F1F5F9' },
  weatherItem: { fontSize: 12, color: '#475569' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#0F172A' },
  seeAll: { fontSize: 12, color: '#2563EB' },
  popularList: { marginBottom: 30 },
});