import React, { useContext } from 'react';
import { View, Text,TouchableOpacity, Image, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ExerciseContext } from '../src/ExerciseContext';

export default function DetailScreen() {
  const { id } = useLocalSearchParams(); 
  const { exercises, markasDone } = useContext(ExerciseContext);
  const router = useRouter();
  const exercise = exercises.find(ex => ex.id === id);

  if (!exercise) return <Text>Exercise not found</Text>;

  const handleComplete = () => {
    markasDone(exercise.id);
    router.back(); 
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: exercise.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{exercise.title}</Text>
        <Text style={styles.desc}>{exercise.description}</Text>
      
        <TouchableOpacity 
                style={styles.btn}
                onPress={handleComplete} 
              >
                <Text style={styles.text} >{exercise.completed ? "Mark as Pending" : "Mark as Completed"} </Text>
              </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 250 },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  desc: { fontSize: 16, marginBottom: 20 },
  btn:{borderRadius: 10,width: '100%', padding: 15, backgroundColor: 'green', alignItems: 'center'},
  text:{fontSize:17, color: 'white'}
});