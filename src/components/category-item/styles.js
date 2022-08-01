import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
import { fonts } from "../../constants/themes/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        margin: 20,
        height: 130,
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
        padding: 10,
    },
    title: {
        fontFamily: fonts.fontFamily.extraBold,
        fontSize: fonts.fontSize.medium,
        color: colors.primary
    }
})