import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { Colors } from '@/constants/theme';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps {
  source?: ImageSourcePropType;
  initials?: string;
  size?: AvatarSize;
  online?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({ source, initials, size = 'md', online }) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { container: 'w-8 h-8', text: 'text-xs' };
      case 'md':
        return { container: 'w-12 h-12', text: 'text-base' };
      case 'lg':
        return { container: 'w-16 h-16', text: 'text-xl' };
      case 'xl':
        return { container: 'w-24 h-24', text: 'text-3xl' };
      default:
        return { container: 'w-12 h-12', text: 'text-base' };
    }
  };

  const { container, text } = getSizeStyles();

  return (
    <View className="relative">
      <View
        className={`${container} items-center justify-center overflow-hidden rounded-full`}
        style={{ backgroundColor: Colors.primary.green }}>
        {source ? (
          <Image source={source} className="h-full w-full" />
        ) : (
          <Text className={`${text} font-bold text-white`}>{initials || '?'}</Text>
        )}
      </View>
      {online && (
        <View
          className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white"
          style={{ backgroundColor: Colors.status.success }}
        />
      )}
    </View>
  );
};
