import React, { useState } from 'react';
import { TextInput, View, Text, TextInputProps } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Colors } from '@/constants/theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, error, icon, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const borderWidth = useSharedValue(1);
  const borderColor = useSharedValue(Colors.text.light);

  const animatedBorderStyle = useAnimatedStyle(() => ({
    borderWidth: borderWidth.value,
    borderColor: borderColor.value,
  }));

  const handleFocus = () => {
    setIsFocused(true);
    borderWidth.value = withTiming(2, { duration: 200 });
    borderColor.value = Colors.primary.green;
  };

  const handleBlur = () => {
    setIsFocused(false);
    borderWidth.value = withTiming(1, { duration: 200 });
    borderColor.value = error ? Colors.status.error : Colors.text.light;
  };

  return (
    <View className="mb-4">
      {label && <Text className="mb-2 text-sm font-medium text-gray-700">{label}</Text>}
      <Animated.View
        className="flex-row items-center rounded-xl bg-white px-4 py-3"
        style={[animatedBorderStyle, error && { borderColor: Colors.status.error }]}>
        {icon && <View className="mr-2">{icon}</View>}
        <TextInput
          {...props}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="flex-1 text-base text-gray-900"
          placeholderTextColor={Colors.text.light}
        />
      </Animated.View>
      {error && <Text className="mt-1 ml-1 text-sm text-red-500">{error}</Text>}
    </View>
  );
};
