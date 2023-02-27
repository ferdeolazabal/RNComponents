import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    blackText: {
        color: 'black',
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        height: 50,
        marginVertical: 5,
        paddingHorizontal: 10,
        color: 'black',
        borderRadius: 10,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 18,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        minWidth: 200,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: 'black',
    },
});
