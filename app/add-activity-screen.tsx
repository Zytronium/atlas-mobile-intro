import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
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
                 placeholderTextColor={colorGray}
      />
      <Pressable style={styles.button1} onPress={() => {
        insertActivity(steps, new Date());
        router.push("/");
      }}>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Pressable>
      <Pressable style={styles.button2} onPress={() => {
        router.back();
      }}>
        <Text style={styles.buttonText2}>Go Back</Text>
      </Pressable>
    </View>
  );
}

const colorBlue = '#00003c';
const colorTeal = '#1ed2af';
const colorRed = '#d00414';
const colorOffwhite = '#fef9e6';
const colorBrightishWhite = '#fffefe';
const colorGray = '#666666';
const colorWhite = 'white';
const colorBlack = 'black';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorOffwhite,
  },
  heading: {
    fontSize: 24,
    color: colorBlack,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: colorBlack,
  },
  button1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 16,
    backgroundColor: colorTeal,
    color: colorWhite,
  },
  button2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 16,
    backgroundColor: colorRed,
    color: colorWhite,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonText2: {
    color: colorOffwhite,
    fontSize: 16,
  },
  input: {
    color: colorBlue,
    padding: 4,
    backgroundColor: colorBrightishWhite,
    borderWidth: 2.5,
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  }
});