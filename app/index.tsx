import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Hello World!
      </Text>
      <Pressable onPress={() => {
        router.push("/add-activity-screen");
      }}>
        <Text>Click Me</Text>
      </Pressable>
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