import { Text, SafeAreaView, ScrollView, Image, StyleSheet, View } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileHeader}>
          <Image source={{ uri: 'https://github.com/octocat.png' }} style={styles.profileImage} />
          <View>
            <Text style={styles.name}>The Octocat</Text>
            <Text style={styles.username}>@octocat</Text>
            <Text style={styles.join}>joined 25 Jan 2011 </Text>
          </View>
        </View>
        <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.label}>Repos</Text>
            <Text style={styles.value}>8</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.label}>Followers</Text>
            <Text style={styles.value}>35451</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.label}>Following</Text>
            <Text style={styles.value}>9</Text>
          </View>
        </View>
        <Text style={styles.links}>San Francisco</Text>
        <Text style={styles.links}>https://github.blog</Text>
        <Text style={styles.disabledLinks}>Not Available</Text>
        <Text style={styles.links}>@github</Text>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 40,
    backgroundColor: 'lightgray',
    padding: 20
  },
  profile: {
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    color: '#106AFE',
    paddingVertical: 2,
    fontSize: 16
  },
  join: {
    color: 'gray',
    fontSize: 16,

  },
  bio: {
    fontSize: 18,
    color: 'gray',
    marginVertical: 10,
    lineHeight: 28,
    letterSpacing: 1

  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0,0.1)',
    padding: 30,
    marginVertical: 20,
    borderRadius: 10
  },
  stat: {
    alignItems: 'center',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  label: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'semibold'
  },
  links: {
    marginTop: 15,
    fontSize: 18,
    color: 'gray',
    letterSpacing: 1
  },
  disabledLinks: {
    marginTop: 15,
    fontSize: 18,
    color: 'lightgray',
    letterSpacing: 1
  }
});
