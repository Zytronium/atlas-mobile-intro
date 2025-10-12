import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { router } from "expo-router";
import { useState } from "react";
import { useActivitiesContext } from "@/app/components/ActivitiesProvider";

export default function AddActivityScreen() {
  const [steps, setSteps] = useState<number>(0);
  const {insertActivity} = useActivitiesContext();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Activity</Text>
      <TextInput placeholder={"Enter steps"}
                 keyboardType="number-pad"
                 onChangeText={(value) => setSteps(parseInt(value))}
                 style={styles.input}
                 placeholderTextColor={colorBeige}
      />
      <TouchableOpacity style={styles.button1} onPress={() => {
        insertActivity(steps, new Date());
        // router.push("/");
      }}>
        <Text style={styles.buttonText}>Add Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => {
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
const colorBeige = '#f7f0dc';
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
  button1: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: '90%',
    padding: 12.5,
    borderRadius: 17.5,
    backgroundColor: colorTeal
  },
  button2: {
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
  },
  input: {
    color: colorTeal,
  }
});