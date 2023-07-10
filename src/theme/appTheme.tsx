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
    }
});

export default styles;