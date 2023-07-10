import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginBottom: 120
    },
    imgBackground: {
        width: 300,
        height: 300,
        position: 'absolute',
        top: -100,
        right: -100,
        opacity: 0.2,
    },
    titleContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleImage: {
        height: 100,
    },
    cardContainer: {
        backgroundColor: 'red',
        borderRadius: 10,
        margin: 5,
        padding: 10,
        height: 100,
    },
    cardName: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    cardPokeball: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -15,
        right: -15,
        opacity: 0.7
    },
    cardPicture: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -12,
        right: -10,
    }
});

export default styles;