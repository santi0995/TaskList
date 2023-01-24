import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      marginBottom: 15,
    },
    itemContainer:{
        width: '85%',
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignSelf: 'flex-end',
        backgroundColor: '#f18f01',
        borderRadius: 10,
      },
      itemList:{
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold'
      },
      checkbox:{
        width: 25,
        height:25,
        borderWidth:2,
        borderColor:'green',
      }
})