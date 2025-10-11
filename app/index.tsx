import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Link, router } from "expo-router";
import useActivities from "@/app/hooks/useActivities";

export default function Index() {
  const { activities } = useActivities();
  return (
    <View style={styles.container}>
      {activities.map((activity) => (
        <Text style={styles.text} key={activity.id}>
          {activity.steps} steps on{" "}
          {new Date(activity.date).toLocaleDateString()}
        </Text>
      ))}
      <Text style={styles.heading}>
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => {
        router.push("/add-activity-screen");
      }}>
        <Text style={styles.buttonText}>Add Activity</Text>
      </TouchableOpacity>
    </View>
  );
}

/* Until I learn how to do global themes... */
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
    backgroundColor: colorOffwhite,
  },
  heading: {
    fontSize: 24,
    color: colorBlue,
  },
  text: {
    fontSize: 16,
    color: colorBlue,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: '90%',
    padding: 12.5,
    borderRadius: 17.5,
    backgroundColor: colorTeal,
  },
  buttonText: {
    color: colorBlue,
    fontSize: 16,
  }
});