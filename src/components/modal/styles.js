import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
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
        fontSize: 17,
        color: '#000'
      },
      selectedTask: {
        fontSize: 20,
        color: '#000',
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
})