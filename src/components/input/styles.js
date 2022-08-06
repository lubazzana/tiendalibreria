import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
import { fonts } from "../../constants/themes/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 35,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: fonts.fontFamily.regular,
        fontSize: fonts.fontSize.small,
    },
    message: {
        marginVertical: 5,
    },
    helperText: {
        fontFamily: fonts.fontFamily.semiBold,
        fontSize: fonts.fontSize.xSmall,
        color: colors.red
    }
})