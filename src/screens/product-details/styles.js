import { Dimensions, StyleSheet } from "react-native";

import { colors } from "../../constants/themes/colors";
import {fonts} from '../../constants/themes/fonts';

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
    },
    details: {
        height: height / 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
    },
    title: {
        fontFamily: fonts.fontFamily.extraBold,
        fontSize: fonts.fontSize.large,
        textAlign: 'center',
        color: colors.primary,
    },
    author: {
        fontFamily: fonts.fontFamily.medium,
        fontSize: fonts.fontSize.medium,
        textAlign: 'center',
        color: colors.primary,
        paddingBottom: 20,
    },
    description: {
        fontFamily: fonts.fontFamily.regular,
        fontSize: fonts.fontSize.small,
        textAlign: 'center',
        color: colors.text,
        paddingBottom: 20,
    },
    price: {
        fontFamily: fonts.fontFamily.bold,
        fontSize: fonts.fontSize.medium,
        textAlign: 'center',
        color: colors.primary,
        padding: 20
    },
    button: {
        margin: 10,
    }

})