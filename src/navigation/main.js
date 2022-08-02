import { CategoriesScreen, ProductDetailsScreen, ProductsScreen } from "../screens";

import React from "react";
import { colors } from "../constants/themes/colors"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { fonts } from "../constants/themes/fonts";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
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
                name="Categories" 
                component={CategoriesScreen}
                options={{
                    title: 'Tienda'
                }}
            />
            <Stack.Screen 
                name="Products" 
                component={ProductsScreen}
                options={({ route }) => ({
                    title: route.params.title,
                })}
            />
            <Stack.Screen 
                name="ProductDetails" 
                component={ProductDetailsScreen} 
                options={({ route }) => ({
                    title: route.params.title,
                })}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator;