import { MapScreen, NewPlaceScreen, PlaceListScreen } from "../screens/index";
import { Platform, TouchableOpacity } from "react-native";

import IonicIcons from '@expo/vector-icons/Ionicons';
import React from "react";
import { colors } from "../constants/themes/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { fonts } from "../constants/themes/fonts";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const PlaceNavigator = () => (
    <Stack.Navigator
        initialRouteName="Places"
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
            name="Places"
            component={PlaceListScreen}
            options={({ navigation }) => ({ 
                title: "Direcciones de envío",
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("New")}>
                        <IonicIcons
                        name="add-circle-outline"
                        size={25}
                        color={colors.white}
                        />
                    </TouchableOpacity>
                    )
                })}
        />
        <Stack.Screen
            name="New"
            component={NewPlaceScreen}
            options={{ title: "Nueva Dirección" }}
        />
        <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{ title: "Mapa" }}
        />
    </Stack.Navigator>
);

export default PlaceNavigator;
