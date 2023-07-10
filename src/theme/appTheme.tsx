import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingBottom: 30,
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#f9c',
        marginVertical: 7,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 10,
        marginStart: 10,
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
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#f9c',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15, 
    },
    textButton: {
        color: '#000', 
        fontSize: 18
    },
    json: {
        fontSize: 18, 
        marginTop: 15
    },
    textInput: {
        borderColor: '#f9c', 
        borderWidth: 2, 
        fontSize: 20,
        marginTop: 20,
        padding: 10,
        textAlign: 'center',
        borderRadius: 10,
    }
});
