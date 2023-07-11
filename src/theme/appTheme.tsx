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
        backgroundColor: '#f00',
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
    },
    detailsImageContainer: {
        height: 290,
        backgroundColor: '#f00',
        alignItems: 'center',
        borderBottomRightRadius: 200,
        borderBottomLeftRadius: 200
    },
    detailsName: {
        fontSize: 25,
        textTransform: 'capitalize',
        color: '#fff',
        fontWeight: '600',
        margin: 10,
    },
    detailsPokeball: {
        height: 230,
        width: 230,
    },
    detailsPicture: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -25,
    }
});

export default styles;