import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
import { fonts } from "../../constants/themes/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 70,
        margin: 10,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 1
    },
    headerContainer: {},
    header: {
        fontSize: fonts.fontSize.medium,
        fontFamily: fonts.fontFamily.bold,
        color: colors.primary
    },
    detailContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailTotal: {
        fontSize: fonts.fontSize.small,
        fontFamily: fonts.fontFamily.regular,
        color: colors.black
    },

})