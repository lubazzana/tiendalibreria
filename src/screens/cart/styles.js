import { Dimensions, StyleSheet } from "react-native";

import {colors} from '../../constants/themes/colors';
import {fonts} from '../../constants/themes/fonts';

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.white,
    },
    cartList: {
        flex: 1,
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    buttonConfirm: {
        backgroundColor: colors.tertiary,
        borderRadius: 10,
        shadowColor: colors.shadow,
        shadowOpacity: 2,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 15,
        elevation: 5,
        padding: 20,
    },
    buttonText: {
        fontFamily: fonts.fontFamily.extraBold,
        fontSize: fonts.fontSize.small,
        color: colors.white,
        textAlign: 'center'
    },
    totalContainer: {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        padding: 20,
        margin: 10,
    },
    total: {
        fontFamily: fonts.fontFamily.extraBold,
        fontSize: fonts.fontSize.medium,
        color: colors.primary,
        textAlign: 'center'
    },
})