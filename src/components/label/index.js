import { Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const Label = ({ children, style, label, subLabel, subLabelStyle }) => {
    return(
        <View style={styles.container}>
            <Text style={[styles.label, style]}>{label}</Text>
            {children}
            {subLabel && <Text style={[styles.subLabel, subLabelStyle]}>{subLabel}</Text>}
        </View>
    )
}

export default Label;