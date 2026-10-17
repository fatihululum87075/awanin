import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

export const RecommendationBanner = ({ title, subtitle, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.85}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <ChevronRight color="#2563EB" size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF6FF',
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  title: {
    color: '#1E40AF',
    fontWeight: '700',
    fontSize: 14,
  },
  subtitle: {
    color: '#3B82F6',
    fontSize: 12,
    marginTop: 2,
  },
});