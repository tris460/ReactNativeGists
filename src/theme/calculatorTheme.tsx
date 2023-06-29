import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        padding: 10,
        justifyContent: 'flex-end'
    },
    answer: {
        color: '#fff',
        fontSize: 28,
        textAlign: 'right',
        paddingEnd: 20,
        paddingBottom: 10
    },
    answerSmall: {
        color: '#999',
        fontSize: 18,
        textAlign: 'right',
        paddingEnd: 20
    },
    button: {
        padding: 10,
        borderRadius: 100,
        width: 80,
        height: 80,
        justifyContent: 'center',
        margin: 5,
    },
    textButton: {
        fontSize: 25,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row', justifyContent: 'center',
        margin: 3
    },
});

export default styles;