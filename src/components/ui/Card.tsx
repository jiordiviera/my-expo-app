import React from 'react';
import { View, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Shadows } from '@/constants/theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  pressable?: boolean;
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, style, pressable = false, onPress }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    if (pressable) {
      scale.value = withSpring(0.98);
    }
  };

  const handlePressOut = () => {
    if (pressable) {
      scale.value = withSpring(1);
    }
  };

  const Component = pressable ? Animated.View : View;

  return (
    <Component
      onTouchStart={handlePressIn}
      onTouchEnd={handlePressOut}
      onTouchCancel={handlePressOut}
      className="rounded-2xl bg-white p-4"
      style={[Shadows.md, pressable && animatedStyle, style]}>
      {children}
    </Component>
  );
};
