import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { useActivitiesContext } from "@/app/components/ActivitiesProvider";
import Activity from "./components/Activity"
import { Activity as ActivityType } from "./hooks/useActivities";
import { FlashList } from "@shopify/flash-list"

export default function Index() {
  const { activities } = useActivitiesContext();

  return (
  <View style={styles.container}>
  <View style={styles.list}>
  <FlashList
    renderItem={({ item }) => <Activity activity={item} />}
    data={activities}
  />
  </View>
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
    // alignItems: 'center',
    backgroundColor: colorOffwhite,
    height: "100%",
  },
  list: {
    marginTop: 45,
    marginLeft: 20,
    height: "90%",
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
