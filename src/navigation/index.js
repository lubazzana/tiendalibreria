import AuthNavigator from "./auth";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TabNavigator from "./tab";
import { useSelector } from "react-redux";

const AppNavigator = () => {
    const userId = useSelector((state) => state.auth.userId);

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                { userId ? 
                    (<TabNavigator />) : 
                    (<AuthNavigator />) 
                }
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default AppNavigator;