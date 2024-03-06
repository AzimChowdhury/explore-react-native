import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    // <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <StatusBar style="auto" />
    </SafeAreaView>
    // {/* </ScrollView> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 40
  },
  box: {

    marginBottom: 20,
  },
  box1: {
    flex: 1,
    backgroundColor: 'blue'
  },
  box2: {
    flex: 1,
    backgroundColor: 'green'
  },
  box3: {
    flex: 1,
    backgroundColor: 'red'
  },
});
