import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { DatabaseProvider } from "@/app/components/DatabaseProvider";
import { ActivitiesProvider } from "@/app/components/ActivitiesProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <DatabaseProvider>
      <ActivitiesProvider>
        <GestureHandlerRootView>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <SafeAreaView style={{ flex: 1 }}>
              <Stack>
                <Stack.Screen
                  name="index"
                  options={{
                    presentation: 'modal',
                    title: 'Home',
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="add-activity-screen"
                  options={{
                    presentation: 'modal',
                    title: 'Add Activity',
                    headerShown: false,
                  }}
                />
              </Stack>
              <StatusBar style="dark" />
            </SafeAreaView>
          </ThemeProvider>
        </GestureHandlerRootView>
      </ActivitiesProvider>
    </DatabaseProvider>
  );
}
