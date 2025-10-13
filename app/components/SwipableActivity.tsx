import { useRef } from "react";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { Alert, StyleSheet, Text, View } from "react-native";
import Activity from "./Activity";
import { useActivitiesContext } from "@/app/components/ActivitiesProvider";

export default function SwipableActivity({
  activity,
  isFirst,
  isLast,
}: {
  activity: any;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  const { deleteActivity } = useActivitiesContext();
  // @ts-ignore
  const swipeableRef = useRef<Swipeable>(null);

  return (
    <View
      key={activity.id}
      style={[
      styles.swipeableActivity,
      isFirst && { marginTop: 20 },
      isLast && { marginBottom: 10 },
      ]}
    >
      <Swipeable
        ref={swipeableRef}
        renderLeftActions={() => <Action text="Delete" />}
        renderRightActions={() => <Action text="Delete" />}
        onSwipeableOpen={() => {
          Alert.alert(
            'Delete Activity',
            'Are you sure you want to delete this activity?',
            [
              { text: 'Cancel',
                style: 'cancel',
                onPress: () => swipeableRef.current?.close(),
              },
              {
                text: 'Delete',
                style: 'destructive',
                onPress: () => {
                  deleteActivity(activity.id);
                  swipeableRef.current?.close();
                }
              },
            ],
            { cancelable: true }
          );
        }}
      >
        <Activity activity={activity} />
      </Swipeable>
    </View>
  );
}

export const Action = ({ text }: { text: string }) => {
  return (
    <View style={styles.actionView}>
      <Text style={styles.actionText}>{text}</Text>
    </View>
  )
}

const colorRed = '#d00414';
const colorWhite = 'white';

const styles = StyleSheet.create({
  actionView: {
    justifyContent: 'center',
    backgroundColor: colorRed,
  },
  actionText: {
    color: colorWhite,
    paddingHorizontal: 3,
    fontSize: 16,
  },
  swipeableActivity: {
    marginTop: 10,
  }
});
