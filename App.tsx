import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import "./global.css";
import { Profile } from '@/app/Profile';

export default function App() {
  return (
    <View>
      <Profile />
      <StatusBar style="auto" />
    </View>
  );
}


