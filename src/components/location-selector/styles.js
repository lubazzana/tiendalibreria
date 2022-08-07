import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    preview: {
        width: "100%",
        height: 200,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.primary,
        borderWidth: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})