import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
import { fonts } from "../../constants/themes/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        margin: 10,
        height: 180,
    },
    containerTouchable: {
        flex: 1,
        borderRadius: 10,
        shadowColor: colors.shadow,
        shadowOpacity: 2,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 15,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: colors.white,
        padding: 15,
    },
    detail: {
        justifyContent: 'center',
    },
    title: {
        fontFamily: fonts.fontFamily.extraBold,
        fontSize: fonts.fontSize.small,
        color: colors.primary,
        textAlign: 'center'
    },
    author: {
        fontFamily: fonts.fontFamily.regular,
        fontSize: fonts.fontSize.small,
        color: colors.text,
        textAlign: 'center',
        paddingBottom: 10,
    },
    price: {
        fontFamily: fonts.fontFamily.bold,
        fontSize: fonts.fontSize.small,
        color: colors.text,
        textAlign: 'center'
    }
})