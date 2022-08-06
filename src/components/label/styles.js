import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
import { fonts } from "../../constants/themes/fonts";

export const styles = StyleSheet.create({
    container: {
        marginTop: 5,
    },
    label: {
        fontSize: fonts.fontSize.small,
        fontFamily: fonts.fontFamily.bold,
        color: colors.primary,
    }
})