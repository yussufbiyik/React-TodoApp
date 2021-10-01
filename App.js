import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Bugün Yapılacaklar</Text>
        
        <View style={styles.items}>
          <Task text={'Uygulamayı tamamla ⏰'}></Task>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#FFF6EB',
  },
  tasksWrapper:{
    paddingTop       : 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    color:'#000',
    fontSize  : 24,
    fontWeight: 'bold',
  },
  items:{
    marginTop:10,
  },
});
