import {Button, TextInput, View} from 'react-native';

import React from "react";
import { styles } from './styles';

const Additem = ({placeholder, task, onHandlerChange, buttonText, buttonColor, onHandlerSubmit} ) => {
    return(
        <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        placeholder={placeholder} 
        autoCapitalize='none'
        autoComplete='off'
        autoCorrect={false}
        value={task}
        onChangeText={onHandlerChange}/>
        <Button disabled={!task} title={buttonText} color={buttonColor} onPress={onHandlerSubmit}/>
        </View>
    )
}

export default Additem;