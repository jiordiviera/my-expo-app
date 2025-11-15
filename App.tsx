import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from '@/screens/HomeScreen';

import './global.css';
import { View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1">
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}
