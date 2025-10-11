import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { router } from "expo-router";

export default function AddActivityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>AddActivityScreen</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
        router.back();
      }}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const colorBlue = '#00003c';
const colorTeal = '#1ed2af';
const colorRed = '#d00414';
const colorOffwhite = '#fef9e6';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorBlue,
  },
  heading: {
    fontSize: 24,
    color: colorTeal,
  },
  text: {
    fontSize: 16,
    color: colorOffwhite,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 12.5,
    borderRadius: 17.5,
    backgroundColor: colorRed
  },
  buttonText: {
    color: colorBlue,
    fontSize: 16,
  }
});