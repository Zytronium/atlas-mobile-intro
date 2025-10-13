import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { useActivitiesContext } from "@/app/components/ActivitiesProvider";
import Activity from "./components/Activity"
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
  <Link style={styles.button1} href={"/add-activity-screen"}>
    <Text>Add Activity</Text>
  </Link>
    <Pressable
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
      <Text style={styles.buttonText}>Delete All Activities</Text>
    </Pressable>
  </View>
  );
}

/* Until I learn how to do global themes... */
const colorBlue = '#00003c';
const colorTeal = '#1ed2af';
const colorRed = '#d00414';
const colorOffwhite = '#fef9e6';
const colorWhite = 'white';
const colorBlack = 'black';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colorOffwhite,
    height: "100%",
  },
  list: {
    margin: 10,
    marginBottom: 0,
    flex: 1,
  },
  heading: {
    fontSize: 24,
    color: colorBlue,
  },
  text: {
    fontSize: 16,
    color: colorBlack,
  },
  button1: {
    width: '100%',
    padding: 16,
    backgroundColor: colorTeal,
    textAlign: 'center',
    color: colorWhite,
    fontSize: 15,
  },
  button2: {
    width: '100%',
    padding: 16,
    backgroundColor: colorRed,
    alignItems: 'center',
    fontSize: 15,
  },
  buttonText: {
    color: colorWhite,
    fontSize: 15,
  }
});
