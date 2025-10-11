import { StyleSheet, Text, View } from 'react-native'

export default function AddActivityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>AddActivityScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
  }
});