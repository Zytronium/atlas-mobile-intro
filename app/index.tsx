import { Alert, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { useActivitiesContext } from "@/app/components/ActivitiesProvider";
import Activity from "./components/Activity"
import { Activity as ActivityType } from "./hooks/useActivities";
import { FlashList } from "@shopify/flash-list"

export default function Index() {
  const { activities, deleteAllActivities } = useActivitiesContext();

  return (
  <View style={styles.container}>
  <View style={styles.list}>
  <FlashList
    renderItem={({ item }) => <Activity activity={item} />}
    data={activities}
  />
  </View>
  <TouchableOpacity style={styles.button1} onPress={() => {
    router.push("/add-activity-screen");
  }}>
    <Text style={styles.buttonText}>Add Activity</Text>
  </TouchableOpacity>
    <TouchableOpacity
      style={styles.button2}
      onPress={() =>
        Alert.alert(
          'Confirm delete',
          'Are you sure you want to delete ALL activities?',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Delete', style: 'destructive', onPress: () => deleteAllActivities() },
          ],
          { cancelable: true }
        )
      }
    >
      <Text style={styles.buttonText2}>Delete All Activities</Text>
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
    // marginTop: 20,
    backgroundColor: colorOffwhite,
    height: "100%",
  },
  list: {
    marginLeft: 20,
    flex: 1,
  },
  heading: {
    fontSize: 24,
    color: colorBlue,
  },
  text: {
    fontSize: 16,
    color: colorBlue,
  },
  button1: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 5,
    width: '90%',
    padding: 12.5,
    borderRadius: 17.5,
    backgroundColor: colorTeal,
  },
  button2: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 5,
    width: '90%',
    padding: 12.5,
    borderRadius: 17.5,
    backgroundColor: colorRed,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonText2: {
    color: colorOffwhite,
    fontWeight: 'bold',
    fontSize: 16,
  }
});
