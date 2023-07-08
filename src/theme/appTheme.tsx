import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#fff'
    },
    separator: {
        width: '100%',
        height: 2,
        backgroundColor: '#ccc',
        marginVertical: 7,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 10,
        marginStart: 10,
        color: '#000',
    },
    box: {
        height: 100, 
        width: 100,
        backgroundColor: '#f9c',
        margin: 50,
    },
    switchContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    switchText: {
        fontSize: 18,
        color: '#000'
    },
});
