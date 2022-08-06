import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
import { fonts } from "../../constants/themes/fonts";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 35,
    },
    preview: {
        width: "100%",
        height: 350,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: fonts.fontFamily.regular,
        fontSize: fonts.fontSize.small,
        color: colors.text,
    },
    image: {
        width: '80%',
        height: '80%',
        borderRadius: 400,
    }
})