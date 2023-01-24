import { AddItem, CustomModal, Tasklist } from './components';
import React, {useState} from 'react';

import { View } from 'react-native';
import { colors } from './constants/theme/colors';
import { styles } from './styles';

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

  const onHandlerCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }

  const onHandlerDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== selectedTask.id));
    setIsModalVisible(!isModalVisible);
  }

  const onHandlerCheck = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id == selectedTask.id))
    setIsModalVisible(!isModalVisible);
  }

  return (
    <View style={styles.container}>
      <AddItem 
        buttonColor={colors.primary}
        buttonText='Add'
        placeholder='add a new task'
        onHandlerChange={onHandlerChange}
        onHandlerSubmit={onHandlerSubmit}
        task={task}
        />
        <Tasklist
        tasks={tasks}
        onHandlerModal={onHandlerModal} />
        <CustomModal 
        isModalVisible={isModalVisible}
        onHandlerCancel={onHandlerCancel}
        onHandlerDelete={onHandlerDelete}
        onHandlerCheck={onHandlerCheck}
        selectedTask={selectedTask}/>
    </View>
  );
}


export default App;