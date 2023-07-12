import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    alignCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#991893',
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        paddingVertical: 20,
        fontWeight: 'bold',
        letterSpacing: 2.5
    },
    data: {
        color: '#fff',
        marginVertical: 10
    }
})