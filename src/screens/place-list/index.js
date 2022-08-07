import { FlatList } from "react-native";
import { PlaceItem } from "../../components/index";
import React from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const PlaceListScreen = ({ navigation }) => {
    const places = useSelector((state) => state.place.places);

    const onSelectPlace = (id) => {
        navigation.navigate("PlaceDetail", { placeId: id });
    }
    const renderItem = ({ item }) => (
        <PlaceItem 
            {...item} 
            address='123 Calle , Ciudad, Distrito' 
            onSelect={onSelectPlace} 
        />
    )

    const ListEmptyComponent = () => (
        <View style={styles.emptyContainer}>
        <Text>No hay lugares disponibles</Text>
        </View>
    )
    return (
        <FlatList 
        style={styles.container}
        data={places}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        />
    )
}

export default PlaceListScreen;