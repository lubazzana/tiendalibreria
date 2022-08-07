import CartNavigator from "./cart";
import IonicIcons from "@expo/vector-icons/Ionicons";
import MainNavigator from "./main";
import OrdersNavigator from "./orders";
import PlaceNavigator from "./places";
import React from "react";
import { Text } from "react-native";
import { colors } from "../constants/themes/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { fonts } from "../constants/themes/fonts";
import { styles } from "../components/category-item/styles";
import { useSelector } from "react-redux";

const BottomTabs = createBottomTabNavigator();

const LabelBottomTab = ({ focused, label }) => (
    <Text
        style={{
            color: focused ? colors.secondary : colors.white,
            fontFamily: focused ? fonts.fontFamily.extraBold : fonts.fontFamily.regular,
            fontSize: fonts.fontSize.xSmall
        }}
    >
        {label}
    </Text>
)

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
        initialRouteName="ShopTab"
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colors.primary,
            },
            tabBarActiveTintColor: colors.secondary,
            tabBarInactiveTintColor: colors.white,
        }}
        >
            <BottomTabs.Screen
                name="ShopTab"
                component={MainNavigator}
                options={{
                tabBarLabel: ({ focused }) => LabelBottomTab({ focused, label: "Tienda"}),
                tabBarIcon: ({ focused }) => (
                    <IonicIcons
                        name={focused ? "home" : "home-outline"}
                        size={24}
                        color={focused ? colors.secondary : colors.white}
                    />
                ),
                }}
            />
            <BottomTabs.Screen
                name="CartTab"
                component={CartNavigator}
                options={{
                tabBarLabel: ({ focused }) => LabelBottomTab({ focused, label: "Carrito"}),
                tabBarIcon: ({ focused }) => (
                    <IonicIcons
                        name={focused ? "cart" : "cart-outline"}
                        size={24}
                        color={focused ? colors.secondary : colors.white}
                    />
                ),
                }}
            />
            <BottomTabs.Screen
                name="OrdersTab"
                component={OrdersNavigator}
                options={{
                tabBarLabel: ({ focused }) => LabelBottomTab({ focused, label: "Órdenes"}),
                tabBarIcon: ({ focused }) => (
                    <IonicIcons
                        name={focused ? "document-text" : "document-text-outline"}
                        size={24}
                        color={focused ? colors.secondary : colors.white}
                    />
                ),
                }}
            />
            <BottomTabs.Screen
                name="PlacesTab"
                component={PlaceNavigator}
                options={{
                tabBarLabel: ({ focused }) => LabelBottomTab({ focused, label: "Direcciones"}),
                tabBarIcon: ({ focused }) => (
                    <IonicIcons
                        name={focused ? "location" : "location-outline"}
                        size={24}
                        color={focused ? colors.secondary : colors.white}
                    />
                ),
                }}
            />
        </BottomTabs.Navigator>
    );
};

export default TabNavigator;