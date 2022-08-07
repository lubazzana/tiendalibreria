import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
import {fonts} from '../../constants/themes/fonts';

export const styles = StyleSheet.create({
    container: {
        borderBottomColor: colors.secondary,
        borderBottomWidth: 1,
        padding: 20,
        margin: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 20,
        backgroundColor: colors.secondary,
    },
    info: {
        marginLeft: 15,
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    title: {
        fontSize: fonts.fontSize.medium,
        fontFamily: fonts.fontFamily.bold,
        color: colors.primary,
        marginBottom: 15
    },
    address: {
        fontSize: fonts.fontSize.small,
        fontFamily: fonts.fontFamily.regular,
        color: colors.text
    }
})