import { StyleSheet } from "react-native";
import {colors} from '../../constants/themes/colors';
import {fonts} from '../../constants/themes/fonts';

export const styles = StyleSheet.create({
    containerKeyboard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    container: {
        width: '85%',
        maxWidth: 500,
        padding: 25,
        margin: 15,
        borderRadius: 10,
        shadowColor: colors.shadow,
        shadowOpacity: 2,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 15,
        elevation: 5,
        backgroundColor: colors.white
    },
    label: {
        fontSize: fonts.fontSize.small,
        fontFamily: fonts.fontFamily.bold,
        color: colors.primary,
    },
    input: {
        height: 40,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: fonts.fontFamily.light,
        marginBottom: 20,
    },
    title: {
        fontFamily: fonts.fontFamily.extraBold,
        fontSize: fonts.fontSize.large,
        marginBottom: 15,
        textAlign: 'center',
        color: colors.white
    },
    prompt: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20
    },
    promptMessage: {
        fontFamily: fonts.fontFamily.regular,
        fontSize: fonts.fontSize.small,
        color: colors.text,
    },
    promptButton: {
        fontFamily: fonts.fontFamily.bold,
        fontSize: fonts.fontSize.small,
        color: colors.primary,
        textAlign: 'center',
    }
})