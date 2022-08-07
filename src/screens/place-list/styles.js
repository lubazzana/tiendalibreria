import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
import {fonts} from '../../constants/themes/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    emptyContainer: {
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: fonts.fontFamily.regular,
        fontSize: fonts.fontSize.medium,
        color: colors.text
    }
})