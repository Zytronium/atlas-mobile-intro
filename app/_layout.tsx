import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { DatabaseProvider } from "@/app/components/DatabaseProvider";
import { ActivitiesProvider } from "@/app/components/ActivitiesProvider";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <DatabaseProvider>
      <ActivitiesProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="index"
                          options={{ presentation: 'modal', title: 'Home' }} />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </ActivitiesProvider>
    </DatabaseProvider>
  );
}
