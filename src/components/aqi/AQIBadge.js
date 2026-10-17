import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AQIBadge = ({ score, status }) => {
  const getBGColor = (val) => {
    if (val <= 50) return { bg: '#E6F4EA', text: '#137333' };
    if (val <= 100) return { bg: '#FEF7E0', text: '#B06000' };
    return { bg: '#FCE8E6', text: '#C5221F' };
  };

  const colors = getBGColor(score);

  return (
    <View style={[styles.badge, { backgroundColor: colors.bg }]}>
      <Text style={[styles.text, { color: colors.text }]}>
        {score} AQI • {status}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 10,
    fontWeight: '700',
  },
});