import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        justifyContent: 'center'
    },
    details: {
        height: height / 2,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        textAlign: 'center'
    }
})