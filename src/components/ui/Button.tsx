import React from 'react';
import { Pressable, Text, ActivityIndicator, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Colors } from '@/constants/theme';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  icon,
  style,
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  const getVariantStyles = () => {
    const isDisabled = disabled || loading;

    switch (variant) {
      case 'primary':
        return `bg-[${Colors.primary.green}] ${isDisabled ? 'opacity-50' : ''}`;
      case 'secondary':
        return `bg-[${Colors.accent.orange}] ${isDisabled ? 'opacity-50' : ''}`;
      case 'outline':
        return `bg-transparent border-2 border-[${Colors.primary.green}] ${isDisabled ? 'opacity-50' : ''}`;
      case 'ghost':
        return `bg-transparent ${isDisabled ? 'opacity-50' : ''}`;
      default:
        return `bg-[${Colors.primary.green}]`;
    }
  };

  const getTextStyles = () => {
    const baseColor =
      variant === 'outline' || variant === 'ghost' ? Colors.primary.green : Colors.text.inverse;

    switch (size) {
      case 'sm':
        return `text-sm font-semibold text-[${baseColor}]`;
      case 'md':
        return `text-base font-semibold text-[${baseColor}]`;
      case 'lg':
        return `text-lg font-bold text-[${baseColor}]`;
      default:
        return `text-base font-semibold text-[${baseColor}]`;
    }
  };

  const getPaddingStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2';
      case 'md':
        return 'px-6 py-3';
      case 'lg':
        return 'px-8 py-4';
      default:
        return 'px-6 py-3';
    }
  };

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled || loading}
      className={` ${getVariantStyles()} ${getPaddingStyles()} flex-row items-center justify-center rounded-xl ${fullWidth ? 'w-full' : ''} `}
      style={[animatedStyle, style]}>
      {loading ? (
        <ActivityIndicator
          color={
            variant === 'outline' || variant === 'ghost'
              ? Colors.primary.green
              : Colors.text.inverse
          }
        />
      ) : (
        <>
          {icon && <Animated.View className="mr-2">{icon}</Animated.View>}
          <Text className={getTextStyles()}>{title}</Text>
        </>
      )}
    </AnimatedPressable>
  );
};
