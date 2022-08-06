import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
import {fonts} from '../../constants/themes/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 
    content: {
        flex: 1,
        margin: 30,
    },
    title: {
        fontSize: fonts.fontSize.medium,
        fontFamily: fonts.fontFamily.bold,
        color: colors.primary,
        marginBottom: 20
    },
    input: {
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        marginBottom: 20,
        padding: 5,
    }
    
})