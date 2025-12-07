import { Stack } from 'expo-router';
import { ExerciseProvider } from '../src/ExerciseContext';

export default function RootLayout() {
  return (
    <ExerciseProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'MAS Daily Workouts' }} />
        <Stack.Screen name="detail" options={{ title: 'Exercise Details' }} />
        <Stack.Screen name="add" options={{ title: 'Add New Exercise' }} />
      </Stack>
    </ExerciseProvider>
  );
}