import {Text, TouchableOpacity, View} from 'react-native'

import React from "react";
import {styles} from './styles'

const TaskItem = ({item, onHandlerModal}) => {

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.checkbox}
        ></TouchableOpacity>
        <TouchableOpacity 
        style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
        <Text style={styles.itemList} >{item.value}</Text>
      </TouchableOpacity>
          </View>
    )
}

export default TaskItem;