import { Platform } from "react-native";
import React from "react";
import { UserProfileScreen } from "../screens/index";
import { colors } from "../constants/themes/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { fonts } from "../constants/themes/fonts";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const UserProfileNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="UserProfile"
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
                name="UserProfile" 
                component={UserProfileScreen}
                options={{
                    title: 'Perfil de usuario'
                }}
            />
        </Stack.Navigator>
    )
}

export default UserProfileNavigator;