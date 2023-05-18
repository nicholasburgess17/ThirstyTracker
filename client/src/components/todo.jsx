import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Todo = ({ id, title }) => {
  const handlePress = () => {
    // Handle the press event for a todo item
    console.log(`Todo ${id} pressed.`);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
  },
});

export default Todo;
