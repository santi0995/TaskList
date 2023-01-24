import {Button, Modal, Text, View} from 'react-native'

import React from "react";
import { styles } from './styles';

const  CustomModal = ({isModalVisible, selectedTask, onHandlerCancel, onHandlerDelete, onHandlerCheck}) => {
    return (
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
            <Button
            title= 'Marcar'
            color= '#06BA63'
            onPress={onHandlerCheck}/>
          </View>
          </View>
        </Modal>
    )
}

export default CustomModal;