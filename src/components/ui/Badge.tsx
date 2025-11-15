import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '@/constants/theme';

type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'primary';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'primary', size = 'md' }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return { bg: Colors.status.success, text: Colors.text.inverse };
      case 'warning':
        return { bg: Colors.status.warning, text: Colors.text.primary };
      case 'error':
        return { bg: Colors.status.error, text: Colors.text.inverse };
      case 'info':
        return { bg: Colors.status.info, text: Colors.text.inverse };
      case 'primary':
        return { bg: Colors.primary.green, text: Colors.text.inverse };
      default:
        return { bg: Colors.primary.green, text: Colors.text.inverse };
    }
  };

  const { bg, text } = getVariantStyles();
  const padding = size === 'sm' ? 'px-2 py-1' : 'px-3 py-1.5';
  const fontSize = size === 'sm' ? 'text-xs' : 'text-sm';

  return (
    <View className={`rounded-full ${padding} self-start`} style={{ backgroundColor: bg }}>
      <Text className={`${fontSize} font-semibold`} style={{ color: text }}>
        {label}
      </Text>
    </View>
  );
};
