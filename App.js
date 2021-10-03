import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Yapılacaklar Listesi</Text>
        
        <View style={styles.items}>
          <ScrollView style={styles.scrollView}>
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                    <Task text={item} /> 
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </View>
      </View>

      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'Yapılacak bir şey ekle!'} value={task} onChangeText={text => setTask(text)} />
        
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#F5F5F5',
  },
  tasksWrapper:{
    paddingTop       : 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize  : 40,
    fontWeight: 'bold',
    color     : '#101419',
  },
  items:{
    marginTop: 10,
  },
  writeTaskWrapper:{
    bottom        : 0,
    paddingVertical:20,
    flexDirection : 'row',
    width         : '100%',
    alignItems    : 'center',
    backgroundColor:'#F5F5F5',
    position      : 'absolute',
    justifyContent: 'space-around',
  },
  input:{
    paddingVertical  : 15,
    paddingHorizontal: 15,
    borderRadius     : 10,
    paddingLeft      : 10,
    height           : 60,
    width            : 250,
    backgroundColor  : '#fff',
  },
  addWrapper:{
    width          : 60,
    height         : 60,
    borderRadius   : 10,
    backgroundColor: '#fff',
    justifyContent : 'center',
    alignItems     : 'center',
  },
  addText:{
    fontSize: 36
  },
  scrollView:{
    marginBottom:200
  }
});
