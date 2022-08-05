import { AuthScreen } from "../screens";
import { Platform } from "react-native";
import React from "react";
import { colors } from "../constants/themes/colors"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { fonts } from "../constants/themes/fonts";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const AuthNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Auth"
            screenOptions={{
                headerStyle: {
                    backgroundColor: isIOS ? colors.secondary : colors.primary,
                    height: 100,
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                    fontFamily: fonts.fontFamily.extraBold,
                    fontSize: fonts.fontSize.large
                }
            }}
        >
            <Stack.Screen 
                name="Auth" 
                component={AuthScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthNavigator;