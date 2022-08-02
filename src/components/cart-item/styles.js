import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
import {fonts} from '../../constants/themes/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 70,
        margin: 10,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 1
    },
    header: {
        fontSize: fonts.fontSize.medium,
        fontFamily: fonts.fontFamily.extraBold,
        color: colors.black
    },
    containerDetail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detail: {
        flex: 0.28,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailQty: {
        fontSize: fonts.fontSize.small,
        fontFamily: fonts.fontFamily.regular,
        color: colors.gray
    },
    detailPrice: {
        fontSize: fonts.fontSize.small,
        fontFamily: fonts.fontFamily.bold,
        color: colors.primary
    },
})