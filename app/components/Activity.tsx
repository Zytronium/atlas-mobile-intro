import { Activity as ActivityType } from "../hooks/useActivities"
import { StyleSheet, Text, View } from "react-native";

export default function Activity({
  activity,
  isFirst,
  isLast,
}: {
  activity: ActivityType;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  return (
    <View style={[
      styles.activity,
      isFirst && { marginTop: 20 },
      isLast && { marginBottom: 10 },
    ]}>
      <Text style={styles.date}>
        {new Date(activity.date).toLocaleDateString()}, {new Date(activity.date).toLocaleTimeString()}
      </Text>
      <Text style={styles.steps}>Steps: {activity.steps}</Text>
    </View>
  );
}

const colorBrightishWhite = '#fffefe';
const colorBlack = 'black';

const styles = StyleSheet.create({
  activity: {
    padding: 4,
    color: colorBlack,
    backgroundColor: colorBrightishWhite,
    borderWidth: 2.5,
    borderRadius: 3,
    width: '100%',
    marginTop: 10,
  },
  date: {
    fontSize: 12,
  },
  steps: {
    fontSize: 24,
    padding: 4,
    paddingTop: 0,
  }
});
