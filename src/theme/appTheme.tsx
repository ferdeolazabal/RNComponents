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
});
