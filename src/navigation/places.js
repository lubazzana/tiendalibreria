import { Platform, TouchableOpacity } from "react-native";

import IonicIcons from '@expo/vector-icons/Ionicons'
import NewPlaceScreen from "../screens/new-place/index";
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
                title: "Direcciones",
                headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("NewPlace")}>
                    <IonicIcons
                    name="add-circle-outline"
                    size={25}
                    color={Platform.OS === "android" ? colors.white : colors.black}
                    />
                </TouchableOpacity>
                )
            })}
        />
        {/* <Stack.Screen
            name="PlaceDetail"
            component={PlaceDetailScreen}
            options={{ title: "Detalle de dirección" }}
        /> */}
        <Stack.Screen
            name="NewPlace"
            component={NewPlaceScreen}
            options={{ title: "Nueva Dirección" }}
        />
        {/* <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{ title: "Mapa" }}
        /> */}
    </Stack.Navigator>
);

export default PlaceNavigator;
