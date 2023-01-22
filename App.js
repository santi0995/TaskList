import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import react, {useState} from 'react';

export default function App() {
  
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

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

  console.warn('tasks', tasks)

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
        <View style={styles.listContainer}>
          {
            tasks.map((item) => (
              <View style={styles.itemContainer}>
              <Text style={styles.itemList} key={item.id}>{item.value}</Text>
              </View>
            ))
          }
        </View>
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
  itemlist:{
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },
});
