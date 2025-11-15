import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreen } from '@/screens/HomeScreen';

import './global.css';

export default function App() {
  return (
    <SafeAreaView className='bg-red-500 flex-1'>
      <HomeScreen />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
