import { useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ExerciseContext } from '../src/ExerciseContext';

export default function HomeScreen() {
  const { exercises } = useContext(ExerciseContext);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => router.push({ pathname: "/detail", params: { id: item.id } })}
          >
            <Image source={{ uri: item.image }} style={styles.img} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={{ color: item.completed ? 'green' : 'gray' }}>
                {item.completed ? 'Completed' : 'Pending'}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity 
        style={styles.btn0}
        onPress={() => router.push("/add")}
      >
        <Text style={styles.fabText}>Add New Exercise</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f4f4f4' },
  card: { flexDirection: 'row', backgroundColor: '#dcdcdd', marginBottom: 10, padding: 10, borderRadius: 8 },
  img: { width: 60, height: 60, borderRadius: 10, marginRight: 15 },
  info: { justifyContent: 'center' },
  title: { fontSize: 18, fontWeight: 'bold' },
  btn0: {  bottom: 40, backgroundColor: '#6096ba', width: 250, height: 60, borderRadius: 9, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' },
  fabText: { color: 'white', fontSize: 24 }
});