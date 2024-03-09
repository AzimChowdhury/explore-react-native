import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, ScrollView, Image, StyleSheet, View } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileHeader}>
          <Image source={{ uri: 'https://github.com/octocat.png' }} style={styles.profileImage} />
          <View>
            <Text style={styles.usernameText}>The Octocat</Text>
            <Text style={styles.usernameText}>octocat</Text>
            <Text style={styles.usernameText}>joined 25 Jan 2011 </Text>
          </View>
        </View>
        <Text style={styles.bioText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Repos</Text>
            <Text style={styles.statValue}>8</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Followers</Text>
            <Text style={styles.statValue}>5454054</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Following</Text>
            <Text style={styles.statValue}>9</Text>
          </View>
        </View>
        <Text style={styles.locationText}>Location: San Fransisco</Text>
        <Text style={styles.linkText}>Blog: b;ph</Text>
      </ScrollView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 30,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 10,
  },
  usernameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bioText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0,0.2)',
    padding: 20
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
  },
  locationText: {
    marginTop: 15,
    fontSize: 14,
    color: '#666',
  },
  linkText: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  },
});
