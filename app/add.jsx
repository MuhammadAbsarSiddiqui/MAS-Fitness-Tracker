import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { ExerciseContext } from '../src/ExerciseContext';

export default function AddExerciseScreen() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const { addExercise } = useContext(ExerciseContext);
  const router = useRouter();

  const handleSubmit = () => {
    if (!title || !desc) {
      Alert.alert('Error', 'Please fill all fields!');
      return;
    }
    addExercise(title, desc);
    router.back();
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Exercise Name" 
        style={styles.input} 
        value={title} 
        onChangeText={setTitle} 
      />
      <TextInput 
        placeholder="Add Description" 
        style={styles.input} 
        value={desc} 
        onChangeText={setDesc} 
      />
     
         <TouchableOpacity 
              style={styles.btn1}
              onPress={handleSubmit}
            >
              <Text style={styles.text}>Save Exercise</Text>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, backgroundColor:'#f1f1f4ff' },
  input: { borderBottomWidth: 1, marginBottom: 20, fontSize: 16, padding: 5 },
  btn1: { backgroundColor: '#6096ba', color:'#ffffff', width: 200, height: 40, borderRadius: 5, justifyContent: 'center', alignSelf: 'center', alignItems: 'center'  },
  text: { fontSize:19, color: 'white' ,fontWeight: 'bold'}
});