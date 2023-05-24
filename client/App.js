import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import NavBar from './src/components/navbar'
import Header from './src/components/header';
import Task from './src/components/task';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Header />
      <Task /> 
      <StatusBar style="auto" />
      <NavBar />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
