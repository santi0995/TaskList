import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';

const App = () => {
  
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerChange = (text) => {
    setTask(text)
  }
  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task
      }
    ])
    setTask('');
  }

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedTask(item);
  }

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
      <Text style={styles.itemList} >{item.value}</Text>
    </TouchableOpacity>
    )

  const keyExtractor = (item) => item.id;

  const onHandlerCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }

  const onHandlerDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== selectedTask.id));
    setIsModalVisible(!isModalVisible);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        placeholder='add a new task' 
        autoCapitalize='none'
        autoComplete='off'
        autoCorrect={false}
        value={task}
        onChangeText={onHandlerChange}/>
        <Button disabled={!task} title='Add' color='#f18f01' onPress={onHandlerSubmit}/>
        </View>
        <FlatList 
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
        />
        <Modal visible={isModalVisible} animationType='slide'>
          <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Lista de tareas</Text>
          <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailMessage}>Quieres eliminar la tarea?</Text>
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button
            title='Cancelar'
            color='#f18f01'
            onPress={onHandlerCancel}
            />
            <Button
            title= 'Eliminar'
            color= 'red'
            onPress={onHandlerDelete}/>
          </View>
          </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginHorizontal: 20,
  },
  input:{
    borderBottomColor: '#f18f01',
    borderBottomWidth: 1,
    height: 40,
    width: '75%',
    color: '#212121'
  },
  listContainer: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  itemContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f18f01',
    marginBottom: 10,
    borderRadius: 10,
  },
  itemList:{
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDetailContainer: {
    paddingVertical: 20,
  },
  modalDetailMessage: {
    fontSize: 14,
    color: '#f18f01'
  },
  selectedTask: {
    fontSize: 14,
    color: '#f18d01',
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
    marginBottom: 20
  },
  modalButtonContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
});

export default App;