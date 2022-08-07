import { Button, FlatList, Text, View } from "react-native";

import { PlaceItem } from "../../components/index";
import React from "react";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const PlaceListScreen = ({ navigation }) => {
    const places = useSelector((state) => state.places.places);

    const onSelectPlace = (id) => {
        navigation.navigate("PlaceDetail", { placeId: id });
    }
    const renderItem = ({ item }) => (
        <PlaceItem {...item} onSelect={onSelectPlace} />
    )

    const ListEmptyComponent = ({ navigation }) => (
        <View style={styles.emptyContainer}>
        <Text>No hay lugares disponibles</Text>
        </View>
    )
    return (
        <View>
        <FlatList 
        style={styles.container}
        data={places}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        />
        {/* <Button 
            title="Ir al inicio" 
            onPress={() => navigation.navigate('New')}
            color={colors.tertiary} 
        /> */}
        </View>
    )
}

export default PlaceListScreen;