import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import NavBar from './NavBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! So epic</Text>
      <StatusBar style="auto" />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
